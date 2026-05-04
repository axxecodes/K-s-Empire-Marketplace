import { Handler } from '@netlify/functions';
import axios from 'axios';

export const handler: Handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { items, email } = JSON.parse(event.body || '{}');
    const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

    if (!PAYSTACK_SECRET_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Paystack is not configured. Please set PAYSTACK_SECRET_KEY in your Netlify Environment Variables.' }),
      };
    }

    // Calculate total amount in kobo
    const totalAmount = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);
    const amountInKobo = Math.round(totalAmount * 100);

    const response = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email: email || 'customer@ksempire.com',
        amount: amountInKobo,
        // Netlify functions don't usually know their own URL easily, 
        // so we use a fallback or the URL provided in env
        callback_url: `${process.env.APP_URL || 'https://' + event.headers.host}/success`,
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
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          url: response.data.data.authorization_url, 
          reference: response.data.data.reference 
        }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: response.data.message }),
      };
    }
  } catch (error: any) {
    console.error('Paystack Error:', error.response?.data || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.response?.data?.message || 'An error occurred with Paystack initialization' }),
    };
  }
};
