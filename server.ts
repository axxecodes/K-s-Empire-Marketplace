import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.post('/api/create-checkout-session', async (req, res) => {
    const { items, email } = req.body;
    const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

    if (!PAYSTACK_SECRET_KEY) {
      return res.status(500).json({ error: 'Paystack is not configured. Please set PAYSTACK_SECRET_KEY in your secrets.' });
    }

    // Calculate total amount in kobo (Paystack uses kobo for NGN)
    const totalAmount = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);
    const amountInKobo = Math.round(totalAmount * 100);

    try {
      const response = await axios.post(
        'https://api.paystack.co/transaction/initialize',
        {
          email: email || 'customer@ksempire.com', // Default if not provided
          amount: amountInKobo,
          callback_url: `${process.env.APP_URL || 'http://localhost:3000'}/success`,
          metadata: {
            cart_items: items.map((item: any) => ({
              id: item.id,
              name: item.name,
              quantity: item.quantity
            }))
          }
        },
        {
          headers: {
            Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.status) {
        res.json({ url: response.data.data.authorization_url, reference: response.data.data.reference });
      } else {
        res.status(400).json({ error: response.data.message });
      }
    } catch (error: any) {
      console.error('Paystack Error:', error.response?.data || error.message);
      res.status(500).json({ error: error.response?.data?.message || 'An error occurred with Paystack initialization' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
