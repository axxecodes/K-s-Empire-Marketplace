export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'smartphones' | 'laptops' | 'chargers' | 'accessories';
  brand: string;
  description: string;
  image: string;
  specs: Record<string, string>;
  isHot?: boolean;
}

export const products: Product[] = [
  // SMARTPHONES (Extended Catalog)
  {
    id: 'p1',
    name: 'iPhone 15 Pro Max',
    price: 1850000,
    category: 'smartphones',
    brand: 'Apple',
    description: 'Titanium design, A17 Pro chip, 48MP Main camera, and USB-C.',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.7-inch Super Retina XDR',
      'Processor': 'A17 Pro',
      'Camera': '48MP Triple System',
      'Battery': 'Up to 29 hours video'
    },
    isHot: true
  },
  {
    id: 'p2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1650000,
    category: 'smartphones',
    brand: 'Samsung',
    description: 'Galaxy AI is here. S Pen included. Titanium frame.',
    image: 'https://images.unsplash.com/photo-1707240011382-378393e82787?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Camera': '200MP Quad System',
      'Battery': '5000mAh'
    },
    isHot: true
  },
  {
    id: 'p120',
    name: 'Tecno Phantom V Fold2',
    price: 1200000,
    category: 'smartphones',
    brand: 'Tecno',
    description: 'The premier foldable experience from Tecno. Dual LTPO displays.',
    image: 'https://images.unsplash.com/photo-1610940882244-8f1aa2f30bc4?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Main Display': '7.85-inch Foldable LTPO',
      'Cover Display': '6.42-inch LTPO',
      'Battery': '5750mAh',
      'Charging': '70W Ultra Charge'
    },
    isHot: true
  },
  {
    id: 'p121',
    name: 'Infinix Note 40 Pro+ 5G',
    price: 450000,
    category: 'smartphones',
    brand: 'Infinix',
    description: 'FastCharge 2.0 with MagCharge. 108MP OIS camera.',
    image: 'https://images.unsplash.com/photo-1621336396287-3d969242903c?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Charging': '100W Multi-Speed FastCharge',
      'Wireless': '20W MagCharge',
      'Display': '120Hz 3D Curved AMOLED',
      'Processor': 'Dimensity 7020 5G'
    }
  },
  {
    id: 'p122',
    name: 'Itel P55+',
    price: 165000,
    category: 'smartphones',
    brand: 'Itel',
    description: 'Power meets style. 45W Power Charge and 90Hz Display.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Charging': '45W Fast Charge',
      'Display': '6.6-inch 90Hz Punch Hole',
      'Storage': '256GB Big Memory',
      'RAM': '8+8GB Extended RAM'
    }
  },
  {
    id: 'p123',
    name: 'Tecno Camon 30 Premier 5G',
    price: 650000,
    category: 'smartphones',
    brand: 'Tecno',
    description: 'The ultimate camera phone. Professional photography at your fingertips.',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Camera': '50MP Triple Sony System',
      'Zoom': '60X Hyper Zoom',
      'Processor': 'Dimensity 8200 Ultimate',
      'Display': '1.5K LTPO AMOLED'
    }
  },
  {
    id: 'p124',
    name: 'Poco F6 Pro',
    price: 750000,
    category: 'smartphones',
    brand: 'Poco',
    description: 'HyperPower Evolved. WQHD+ 120Hz Flow AMOLED.',
    image: 'https://images.unsplash.com/photo-1662581878486-068305886617?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'Snapdragon 8 Gen 2',
      'Display': 'WQHD+ 120Hz Flow AMOLED',
      'Charging': '120W HyperCharge',
      'Camera': '50MP with OIS'
    }
  },
  {
    id: 'p125',
    name: 'Redmi Note 13 Pro+ 5G',
    price: 620000,
    category: 'smartphones',
    brand: 'Xiaomi',
    description: 'Every shot iconic. 200MP OIS camera, IP68 durability.',
    image: 'https://images.unsplash.com/photo-1693414902879-11261d7b38d3?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Camera': '200MP OIS',
      'Charging': '120W HyperCharge',
      'Display': '1.5K Curved AMOLED',
      'Durability': 'IP68 Dust and Water'
    }
  },
  {
    id: 'p126',
    name: 'Infinix Zero 30 5G',
    price: 490000,
    category: 'smartphones',
    brand: 'Infinix',
    description: 'Create Your Own Story. 50MP 4K 60fps Vlog Camera.',
    image: 'https://images.unsplash.com/photo-1689100063259-7d8b5c90d561?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Front Camera': '50MP 4K 60fps',
      'Rear Camera': '108MP OIS',
      'Display': '144Hz 3D Curved AMOLED',
      'Processor': 'Dimensity 8020'
    }
  },
  {
    id: 'p127',
    name: 'Itel RS4',
    price: 215000,
    category: 'smartphones',
    brand: 'Itel',
    description: 'Fastest performance for youth. Helio G99 Ultimate.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'Helio G99 Ultimate',
      'Display': '120Hz Refresh Rate',
      'Charging': '45W Fast Charge',
      'Audio': 'Dual Stereo Speakers'
    }
  },
  {
    id: 'p9',
    name: 'Google Pixel 8 Pro',
    price: 950000,
    category: 'smartphones',
    brand: 'Google',
    description: 'The most powerful Pixel yet, with a pro camera and Google AI.',
    image: 'https://images.unsplash.com/photo-1696446702183-cbd139726075?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.7-inch LTPO OLED',
      'Processor': 'Google Tensor G3',
      'Camera': '50MP Triple System',
      'Battery': '5050mAh'
    }
  },
  {
    id: 'p10',
    name: 'Xiaomi 14 Ultra',
    price: 1200000,
    category: 'smartphones',
    brand: 'Xiaomi',
    description: 'Leica Quad Camera System. Snapdragon 8 Gen 3.',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.73-inch AMOLED',
      'Processor': 'Snapdragon 8 Gen 3',
      'Camera': '50MP Quad Leica',
      'Battery': '5000mAh'
    }
  },
  {
    id: 'p11',
    name: 'OnePlus 12',
    price: 850000,
    category: 'smartphones',
    brand: 'OnePlus',
    description: 'Smooth Beyond Belief. 4th Gen Hasselblad Camera for Mobile.',
    image: 'https://images.unsplash.com/photo-1710151121932-d85c13866ec5?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.82-inch AMOLED 120Hz',
      'Processor': 'Snapdragon 8 Gen 3',
      'Camera': '50MP Triple System',
      'Battery': '5400mAh'
    }
  },
  {
    id: 'p12',
    name: 'Nothing Phone (2)',
    price: 580000,
    category: 'smartphones',
    brand: 'Nothing',
    description: 'A new way to interact. Glyph Interface. Powerful specs.',
    image: 'https://images.unsplash.com/photo-1691435406322-8356f9175344?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.7-inch LTPO OLED',
      'Processor': 'Snapdragon 8+ Gen 1',
      'Camera': '50MP Dual System',
      'Battery': '4700mAh'
    }
  },
  {
    id: 'p13',
    name: 'Asus ROG Phone 8 Pro',
    price: 1400000,
    category: 'smartphones',
    brand: 'Asus',
    description: 'Beyond Gaming. The ultimate gaming powerhouse.',
    image: 'https://images.unsplash.com/photo-1612448331650-6e396bc8d17a?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.78-inch Samsung AMOLED',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '16GB / 24GB',
      'Refresh Rate': '165Hz'
    }
  },
  {
    id: 'p71',
    name: 'Asus ROG Phone 8 Pro',
    price: 950000,
    category: 'smartphones',
    brand: 'Asus',
    description: 'Beyond gaming. The ultimate powerhouse.',
    image: 'https://images.unsplash.com/photo-1610940882244-8f1aa2f30bc4?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.78-inch LTPO AMOLED 165Hz',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': 'Up to 24GB LPDDR5X',
      'Cooldown': 'GameCool 8 system'
    }
  },
  {
    id: 'p72',
    name: 'Xiaomi 14 Ultra',
    price: 1200000,
    category: 'smartphones',
    brand: 'Xiaomi',
    description: 'Legendary imaging. A new era of mobile photography.',
    image: 'https://images.unsplash.com/photo-1693414902879-11261d7b38d3?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Camera': 'Leica 1-inch sensor',
      'Variable Aperture': 'f/1.63—f/4.0',
      'Video': '8K professional recording',
      'Display': 'All-around Liquid Display'
    }
  },
  {
    id: 'p73',
    name: 'Nothing Phone (2a)',
    price: 350000,
    category: 'smartphones',
    brand: 'Nothing',
    description: 'See the world through fresh eyes. Powerful and efficient.',
    image: 'https://images.unsplash.com/photo-1689100063259-7d8b5c90d561?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.7-inch AMOLED 120Hz',
      'Processor': 'MediaTek Dimensity 7200 Pro',
      'Camera': 'Dual 50MP Main',
      'Design': 'Transparent Glyph Interface'
    }
  },
  {
    id: 'p74',
    name: 'Red Magic 9 Pro',
    price: 820000,
    category: 'smartphones',
    brand: 'Nubia',
    description: 'The chillest gaming phone. Active cooling fan built-in.',
    image: 'https://images.unsplash.com/photo-1662581881645-f932e609712a?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Fan': '22,000 RPM Active Cooling',
      'Processor': 'Snapdragon 8 Gen 3',
      'Battery': '6500mAh Dual Cell',
      'Triggers': '520Hz Shoulder Triggers'
    }
  },
  {
    id: 'p75',
    name: 'Honor Magic6 Pro',
    price: 980000,
    category: 'smartphones',
    brand: 'Honor',
    description: 'Discover the magic. Falcon Camera System.',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Camera': '180MP Periscope Telephoto',
      'Display': 'LTPO Eye Comfort Display',
      'Battery': 'Second-gen Silicon-carbon',
      'Durability': 'NanoCrystal Shield'
    }
  },
  {
    id: 'p76',
    name: 'Oppo Find X7 Ultra',
    price: 1150000,
    category: 'smartphones',
    brand: 'Oppo',
    description: 'Master of colors. Dual periscope cameras.',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Camera': 'Quad Master Camera with Hasselblad',
      'Sensors': '1-inch Sony LYT-900',
      'Display': 'ProXDR Display',
      'Charging': '100W SUPERVOOC'
    }
  },
  {
    id: 'p77',
    name: 'ZTE Axon 60 Ultra',
    price: 850000,
    category: 'smartphones',
    brand: 'ZTE',
    description: 'The ultimate satellite connectivity phone.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Connectivity': 'Dual Satellite Calling',
      'Processor': 'Snapdragon 8 Gen 3',
      'Security': 'Independent Secure Chip',
      'Network': '5G-A Advanced'
    }
  },
  {
    id: 'p78',
    name: 'iPhone 15 Pro Max (Refurbished)',
    price: 1350000,
    category: 'smartphones',
    brand: 'Apple',
    description: 'Like new. Titanium design. Pro camera system.',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Condition': 'Grade A+',
      'Material': 'Aerospace-grade Titanium',
      'Zoom': '5x Optical zoom',
      'Battery Health': '100% Guaranteed'
    }
  },
  {
    id: 'p79',
    name: 'Fairphone 5',
    price: 480000,
    category: 'smartphones',
    brand: 'Fairphone',
    description: 'Fair. Durable. Repairable. Sustainable tech.',
    image: 'https://images.unsplash.com/photo-1550029330-8edcca828691?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Repairability': '10/10 Score',
      'Sustainability': 'Modular design',
      'Support': '8 years software updates',
      'Materials': 'Recycled and Fair-mined'
    }
  },
  {
    id: 'p80',
    name: 'Meizu 21 Pro',
    price: 780000,
    category: 'smartphones',
    brand: 'Meizu',
    description: 'Titan Eye design. Unbounded performance.',
    image: 'https://images.unsplash.com/photo-1662581878486-068305886617?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '2K+ 120Hz LTPO',
      'Fingerprint': 'Ultrasonic mTouch',
      'OS': 'Flyme OS integration',
      'Motor': 'mEngine Ultra'
    }
  },
  {
    id: 'p81',
    name: 'Samsung Galaxy A55 5G',
    price: 420000,
    category: 'smartphones',
    brand: 'Samsung',
    description: 'Awesome stays awesome. Solid mid-range performance.',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Camera': '50MP with OIS',
      'Screen': '120Hz Super AMOLED',
      'Durability': 'IP67 Water/Dust',
      'Security': 'Samsung Knox Vault'
    }
  },
  {
    id: 'p82',
    name: 'Blackview BL9000 Pro',
    price: 520000,
    category: 'smartphones',
    brand: 'Blackview',
    description: 'Rugged performance. FLIR Thermal imaging built-in.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Feature': 'Thermal Imaging',
      'Durability': 'MIL-STD-810H / IP69K',
      'Speaker': 'Dual Harman Kardon',
      'Connectivity': '5G Network Support'
    }
  },
  {
    id: 'p33',
    name: 'Motorola Edge 40 Pro',
    price: 720000,
    category: 'smartphones',
    brand: 'Motorola',
    description: 'Boundless display. 165Hz refresh rate. Fast charging.',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.67-inch pOLED 165Hz',
      'Processor': 'Snapdragon 8 Gen 2',
      'Battery': '4600mAh',
      'Charging': '125W TurboPower'
    }
  },
  {
    id: 'p34',
    name: 'Huawei P60 Pro',
    price: 880000,
    category: 'smartphones',
    brand: 'Huawei',
    description: 'The art of light. Ultra Lighting Telephoto Camera.',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Camera': 'XMAGE Imaging System',
      'Display': '6.67-inch LTPO 120Hz',
      'Glass': 'Kunlun Glass',
      'Charging': '88W SuperCharge'
    }
  },
  {
    id: 'p35',
    name: 'Realme GT5 Pro',
    price: 650000,
    category: 'smartphones',
    brand: 'Realme',
    description: 'The master touch. Periscope camera and Snapdragon 8 Gen 3.',
    image: 'https://images.unsplash.com/photo-1662581876532-628943ad969b?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'Snapdragon 8 Gen 3',
      'Camera': 'Periscope Telephoto',
      'Battery': '5400mAh',
      'Display': '4500 nit peak brightness'
    }
  },
  {
    id: 'p36',
    name: 'Vivo X100 Pro',
    price: 920000,
    category: 'smartphones',
    brand: 'Vivo',
    description: 'Zeiss optics integration. Dimensity 9300 flagship.',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Camera': 'Zeiss APO Telephoto',
      'Processor': 'MediaTek Dimensity 9300',
      'Chip': 'Vivo V3 Imaging Chip',
      'Charging': '100W FlashCharge'
    }
  },
  {
    id: 'p37',
    name: 'iPhone 15 Plus',
    price: 1100000,
    category: 'smartphones',
    brand: 'Apple',
    description: 'Big screen. Long battery life. Dynamic Island.',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.7-inch Super Retina XDR',
      'Chip': 'A16 Bionic',
      'Camera': '48MP Main',
      'Battery': 'All-day battery'
    }
  },
  {
    id: 'p38',
    name: 'Samsung Galaxy Z Flip 5',
    price: 850000,
    category: 'smartphones',
    brand: 'Samsung',
    description: 'The ultimate self-expression tool. Flex Window.',
    image: 'https://images.unsplash.com/photo-1690022716130-9759d57fb364?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.7-inch Main / 3.4-inch Cover',
      'Hinge': 'Flex Hinge',
      'Processor': 'Snapdragon 8 Gen 2 for Galaxy',
      'Water Resistance': 'IPX8'
    }
  },
  {
    id: 'p39',
    name: 'Google Pixel 8',
    price: 680000,
    category: 'smartphones',
    brand: 'Google',
    description: 'Helpful everyday. Powerfully personal.',
    image: 'https://images.unsplash.com/photo-1696446702174-884820875e53?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '6.2-inch Actua Display',
      'Processor': 'Google Tensor G3',
      'Camera': '50MP System',
      'AI': 'Magic Editor & Best Take'
    }
  },
  {
    id: 'p40',
    name: 'Poco F5 Pro',
    price: 450000,
    category: 'smartphones',
    brand: 'Xiaomi',
    description: 'Ignite your hyperpower. WQHD+ 120Hz AMOLED.',
    image: 'https://images.unsplash.com/photo-1662581878486-068305886617?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'Snapdragon 8+ Gen 1',
      'Display': 'WQHD+ AMOLED',
      'Charging': '67W Wired / 30W Wireless',
      'Cooling': 'LiquidCool Technology 2.0'
    }
  },
  {
    id: 'p41',
    name: 'Redmi Note 13 Pro+',
    price: 380000,
    category: 'smartphones',
    brand: 'Xiaomi',
    description: 'Every shot iconic. 200MP camera system.',
    image: 'https://images.unsplash.com/photo-1693414902879-11261d7b38d3?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Camera': '200MP OIS',
      'Charging': '120W HyperCharge',
      'Display': '1.5K Curved AMOLED',
      'Durability': 'IP68'
    }
  },

  // LAPTOPS (8 items)
  {
    id: 'p3',
    name: 'MacBook Pro 14 M3',
    price: 2450000,
    category: 'laptops',
    brand: 'Apple',
    description: 'The most advanced chips for personal computers.',
    image: 'https://images.unsplash.com/photo-1517336714467-d13a23232eb4?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Chip': 'Apple M3 Pro',
      'RAM': '18GB Unified Memory',
      'Storage': '512GB SSD',
      'Display': 'Liquid Retina XDR'
    },
    isHot: true
  },
  {
    id: 'p4',
    name: 'HP Spectre x360',
    price: 1950000,
    category: 'laptops',
    brand: 'HP',
    description: 'Convertible design with stunning 4K OLED display.',
    image: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'Intel Core i7 13th Gen',
      'RAM': '16GB',
      'Storage': '1TB SSD',
      'Touch': '4K OLED Touchscreen'
    }
  },
  {
    id: 'p14',
    name: 'Dell XPS 15 9530',
    price: 2200000,
    category: 'laptops',
    brand: 'Dell',
    description: 'Stunning InfinityEdge display with powerful internals.',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'Intel Core i9 13th Gen',
      'GPU': 'RTX 4070',
      'RAM': '32GB',
      'Storage': '1TB SSD'
    }
  },
  {
    id: 'p15',
    name: 'ASUS ROG Zephyrus G14',
    price: 1850000,
    category: 'laptops',
    brand: 'ASUS',
    description: 'The world\'s most powerful 14-inch gaming laptop.',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'AMD Ryzen 9',
      'GPU': 'RTX 4060',
      'Refresh Rate': '165Hz',
      'Weight': '1.65kg'
    }
  },
  {
    id: 'p16',
    name: 'Lenovo Yoga 9i',
    price: 1650000,
    category: 'laptops',
    brand: 'Lenovo',
    description: 'Pure efficiency meeting premium craftsmanship.',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '14-inch 4K OLED',
      'Processor': 'Intel Evo i7',
      'Audio': 'Bowers & Wilkins',
      'Design': '2-in-1'
    }
  },
  {
    id: 'p17',
    name: 'Microsoft Surface Laptop 5',
    price: 1350000,
    category: 'laptops',
    brand: 'Microsoft',
    description: 'Sleek, powerful, and ready for work or play.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '13.5-inch PixelSense',
      'Processor': 'Intel Core i5',
      'Battery': 'Up to 18 hours',
      'Color': 'Platinum / Matte Black'
    }
  },
  {
    id: 'p29',
    name: 'Razer Blade 16',
    price: 3200000,
    category: 'laptops',
    brand: 'Razer',
    description: 'Maximum performance. Pure professional grade.',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'Intel i9-13950HX',
      'GPU': 'RTX 4090',
      'Display': 'Dual Mode Mini-LED',
      'Build': 'CNC Aluminum'
    }
  },
  {
    id: 'p30',
    name: 'Acer Swift Edge 16',
    price: 1100000,
    category: 'laptops',
    brand: 'Acer',
    description: 'Ultra-thin, ultra-light OLED performance.',
    image: 'https://images.unsplash.com/photo-1516387933999-ed33bd5a133d?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Weight': '1.17kg',
      'Display': '16-inch 3.2K OLED',
      'Processor': 'AMD Ryzen 7',
      'Connectivity': 'Wi-Fi 7 Ready'
    }
  },
  {
    id: 'p83',
    name: 'Razer Blade 16',
    price: 3200000,
    category: 'laptops',
    brand: 'Razer',
    description: 'More display. More power. World\'s first dual-mode Mini-LED.',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '16-inch Dual Mode Mini-LED',
      'GPU': 'RTX 4090',
      'Processor': 'Intel Core i9',
      'Build': 'Unibody Aluminum'
    }
  },
  {
    id: 'p84',
    name: 'Asus ROG Zephyrus G14',
    price: 1650000,
    category: 'laptops',
    brand: 'ASUS',
    description: 'The world\'s most powerful 14-inch gaming laptop.',
    image: 'https://images.unsplash.com/photo-158872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '14-inch ROG Nebula OLED',
      'Processor': 'AMD Ryzen 9',
      'GPU': 'RTX 4070',
      'Weight': '1.5kg'
    }
  },
  {
    id: 'p85',
    name: 'Framework Laptop 16',
    price: 1850000,
    category: 'laptops',
    brand: 'Framework',
    description: 'A thin, light, high-performance 16-inch laptop.',
    image: 'https://images.unsplash.com/photo-1516387933999-ed33bd5a133d?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Modular': 'Fully repairable/upgradable',
      'GPU': 'Expansion Bay System',
      'Keyboard': 'Configurable input modules',
      'Display': '16-inch 165Hz'
    }
  },
  {
    id: 'p86',
    name: 'Gigabyte AERO 16 OLED',
    price: 1950000,
    category: 'laptops',
    brand: 'Gigabyte',
    description: 'Boundless creativity. 4K OLED display.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '16-inch 4K OLED',
      'Color': 'Dual Color Calibration',
      'Processor': 'Intel Core i9',
      'Connectivity': 'Thunderbolt 4'
    }
  },
  {
    id: 'p87',
    name: 'Samsung Galaxy Book4 Ultra',
    price: 2150000,
    category: 'laptops',
    brand: 'Samsung',
    description: 'The most powerful Galaxy Book yet. AI-powered.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '3K Dynamic AMOLED 2X',
      'Processor': 'Intel Core Ultra 9',
      'Ecosystem': 'Seamless Galaxy connectivity',
      'GPU': 'RTX 4070'
    }
  },
  {
    id: 'p88',
    name: 'Dell XPS 13 (9340)',
    price: 1250000,
    category: 'laptops',
    brand: 'Dell',
    description: 'Iconic design. Sustainable materials. Pure performance.',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'Intel Core Ultra',
      'Keyboard': 'Zero-lattice keyboard',
      'Display': 'EyeSafe technology',
      'Build': 'CNC machined aluminum'
    }
  },
  {
    id: 'p89',
    name: 'Microsoft Surface Laptop 6',
    price: 1350000,
    category: 'laptops',
    brand: 'Microsoft',
    description: 'Professional power. Incredible speed. Built for AI.',
    image: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'Intel Core Ultra H-Series',
      'Feature': 'Surface Studio Camera',
      'Display': 'PixelSense Touchscreen',
      'Security': 'Secured-core PC'
    }
  },
  {
    id: 'p90',
    name: 'Huawei MateBook X Pro',
    price: 1850000,
    category: 'laptops',
    brand: 'Huawei',
    description: 'Unthinkably light. Unbelievably powerful.',
    image: 'https://images.unsplash.com/photo-1516387933999-ed33bd5a133d?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Weight': '980g',
      'Processor': 'Intel Core Ultra 9',
      'Display': 'Fixed-flexible OLED',
      'Battery': '70Wh High-density'
    }
  },
  {
    id: 'p91',
    name: 'Valve Steam Deck OLED',
    price: 550000,
    category: 'laptops',
    brand: 'Valve',
    description: 'Portable PC gaming. Now with a massive OLED.',
    image: 'https://images.unsplash.com/photo-1621336396287-3d969242903c?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '7.4-inch OLED',
      'Battery': '50Wh (up to 12 hours)',
      'Connectivity': 'Wi-Fi 6E',
      'Storage': 'NVMe SSD'
    }
  },
  {
    id: 'p92',
    name: 'Razer Blade 18',
    price: 4500000,
    category: 'laptops',
    brand: 'Razer',
    description: 'The desktop replacement gaming laptop.',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '18-inch QHD+ 300Hz',
      'GPU': 'RTX 4090',
      'Audio': '6-Speaker Array with THX',
      'Connectivity': 'Thunderbolt 5'
    }
  },
  {
    id: 'p94',
    name: 'Lenovo Legion 9i',
    price: 3600000,
    category: 'laptops',
    brand: 'Lenovo',
    description: 'King of gaming. Forged carbon design.',
    image: 'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Cooling': 'Integrated Liquid Cooling',
      'Processor': 'Intel Core i9-14900HX',
      'RAM': '64GB DDR5',
      'Display': '16-inch 3.2K Mini-LED'
    }
  },
  {
    id: 'p42',
    name: 'MacBook Air 15 M3',
    price: 1850000,
    category: 'laptops',
    brand: 'Apple',
    description: 'Strikingly thin. Fast M3 chip. Big Liquid Retina display.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '15.3-inch Liquid Retina',
      'Chip': 'Apple M3',
      'RAM': '8GB / 16GB / 24GB',
      'Battery': 'Up to 18 hours'
    }
  },
  {
    id: 'p43',
    name: 'HP Spectre x360 14',
    price: 1550000,
    category: 'laptops',
    brand: 'HP',
    description: 'Elegance meets power. 2-in-1 convertible design.',
    image: 'https://images.unsplash.com/photo-1544244015-0cd4b3ff869d?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '14-inch 2.8K OLED',
      'Processor': 'Intel Core Ultra 7',
      'Audio': 'Poly Studio tuned',
      'Feature': '5MP IR Camera'
    }
  },
  {
    id: 'p44',
    name: 'Alienware m18 R2',
    price: 3800000,
    category: 'laptops',
    brand: 'Dell',
    description: 'Unleash unstoppable performance. Massive 18" display.',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'Intel i9-14900HX',
      'GPU': 'RTX 4090',
      'Display': '18-inch QHD+ 165Hz',
      'Cooling': 'Cryo-tech technology'
    }
  },
  {
    id: 'p45',
    name: 'ASUS Zenbook Duo',
    price: 2100000,
    category: 'laptops',
    brand: 'ASUS',
    description: 'Double the possibilities. Dual 14" OLED screens.',
    image: 'https://images.unsplash.com/photo-158872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Screens': '2x 14-inch OLED',
      'Processor': 'Intel Core Ultra 9',
      'RAM': '32GB',
      'Design': 'Detachable Keyboard'
    }
  },
  {
    id: 'p46',
    name: 'Microsoft Surface Pro 9',
    price: 950000,
    category: 'laptops',
    brand: 'Microsoft',
    description: 'The power of a laptop, the flexibility of a tablet.',
    image: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '13-inch PixelSense',
      'Weight': '879g',
      'OS': 'Windows 11 Pro',
      'Connectivity': 'Optional 5G'
    }
  },
  {
    id: 'p47',
    name: 'Lenovo ThinkPad X1 Carbon Gen 12',
    price: 1950000,
    category: 'laptops',
    brand: 'Lenovo',
    description: 'The ultimate business companion. Ultra-light, ultra-tough.',
    image: 'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Material': 'Carbon Fiber',
      'Processor': 'Intel Core Ultra',
      'Safety': 'ThinkShield Security',
      'Keyboard': 'Spill-resistant'
    }
  },
  {
    id: 'p48',
    name: 'Razer Blade 14',
    price: 2450000,
    category: 'laptops',
    brand: 'Razer',
    description: 'Small size. Big performance. Power in portability.',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'AMD Ryzen 9 8945HS',
      'GPU': 'RTX 4070',
      'Display': 'QHD+ 240Hz',
      'Build': 'Precision Milled'
    }
  },
  {
    id: 'p49',
    name: 'MSI Stealth 16 AI Studio',
    price: 2850000,
    category: 'laptops',
    brand: 'MSI',
    description: 'Slim, Sharp, Stylish. Professional Studio grade.',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'Intel Core Ultra 9',
      'GPU': 'RTX 4080',
      'Display': 'UHD+ Mini-LED 120Hz',
      'Weight': '1.99kg'
    }
  },
  {
    id: 'p50',
    name: 'LG Gram SuperSlim',
    price: 1250000,
    category: 'laptops',
    brand: 'LG',
    description: 'Defying gravity. The thinnest LG gram ever.',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Thickness': '10.9mm',
      'Weight': '990g',
      'Display': '15.6-inch OLED',
      'Durability': 'MIL-STD-810H'
    }
  },

  // CHARGERS (8 items)
  {
    id: 'p5',
    name: 'Anker 737 Power Bank',
    price: 145000,
    category: 'chargers',
    brand: 'Anker',
    description: '140W ultra-fast charging for laptops and phones.',
    image: 'https://images.unsplash.com/photo-1619134766536-746751351137?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Capacity': '24,000mAh',
      'Output': '140W Max',
      'Ports': '2x USB-C, 1x USB-A'
    }
  },
  {
    id: 'p7',
    name: 'Ugreen 65W GaN Charger',
    price: 45000,
    category: 'chargers',
    brand: 'Ugreen',
    description: 'Compact 3-port fast wall charger for all devices.',
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Power': '65W',
      'Ports': '2x USB-C, 1x USB-A',
      'Size': 'Ultra Compact'
    }
  },
  {
    id: 'p18',
    name: 'Baseus 100W GaN Charging Station',
    price: 75000,
    category: 'chargers',
    brand: 'Baseus',
    description: 'Desktop charging hub for 4 devices at once.',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Total Power': '100W',
      'Ports': '2x USB-C, 2x USB-A',
      'Design': 'Desktop Stand'
    }
  },
  {
    id: 'p19',
    name: 'Samsung 45W Travel Adapter',
    price: 25000,
    category: 'chargers',
    brand: 'Samsung',
    description: 'Super-fast charging for your Galaxy devices.',
    image: 'https://images.unsplash.com/photo-1619623886737-08b26117565c?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Output': '45W',
      'Type': 'USB-C',
      'Compatibility': 'Universal'
    }
  },
  {
    id: 'p20',
    name: 'Apple 20W USB-C Adapter',
    price: 22000,
    category: 'chargers',
    brand: 'Apple',
    description: 'The standard fast charger for iPhone and iPad.',
    image: 'https://images.unsplash.com/photo-1585338663434-754cd90059c2?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Output': '20W',
      'Type': 'USB-C',
      'Official': 'MagSafe Compatible'
    }
  },
  {
    id: 'p21',
    name: 'Belkin BoostCharge Pro 3-in-1',
    price: 185000,
    category: 'chargers',
    brand: 'Belkin',
    description: 'Wireless charging for iPhone, Watch, and AirPods.',
    image: 'https://images.unsplash.com/photo-1616431940900-5c62d080c9e6?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Type': 'MagSafe Wireless',
      'Stations': 'Phone, Watch, Buds',
      'Speed': '15W Fast Wireless'
    }
  },
  {
    id: 'p31',
    name: 'Satechi 165W USB-C Gallium Nitride',
    price: 110000,
    category: 'chargers',
    brand: 'Satechi',
    description: 'Pro-grade high power charging for creative workstations.',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Power': '165W',
      'Ports': '4x USB-C PD',
      'Safety': 'Auto-power distribution'
    }
  },
  {
    id: 'p32',
    name: 'Zendure SuperTank Pro',
    price: 195000,
    category: 'chargers',
    brand: 'Zendure',
    description: 'High-end power bank with OLED status display.',
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Capacity': '26,800mAh',
      'Output': '100W PD',
      'Display': 'OLED Screen'
    }
  },
  {
    id: 'p95',
    name: 'Anker 737 Power Bank (PowerCore 24K)',
    price: 145000,
    category: 'chargers',
    brand: 'Anker',
    description: 'Ultra-powerful two-way charging with smart display.',
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Output': '140W',
      'Capacity': '24,000mAh',
      'Screen': 'Smart Digital Display',
      'Ports': '2x USB-C, 1x USB-A'
    }
  },
  {
    id: 'p96',
    name: 'Ugreen 300W GaN Desktop Charger',
    price: 245000,
    category: 'chargers',
    brand: 'Ugreen',
    description: 'The world\'s first 5-port 300W GaN desktop charger.',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Total Power': '300W',
      'Ports': '4x USB-C, 1x USB-A',
      'Single Port': '140W Max',
      'Tech': 'GaNFast'
    }
  },
  {
    id: 'p97',
    name: 'Satechi 200W USB-C 6-Port GaN Charger',
    price: 185000,
    category: 'chargers',
    brand: 'Satechi',
    description: 'Power your entire desk setup with one powerhouse.',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Power': '200W',
      'Ports': '6x USB-C PD',
      'Material': 'Aluminum Finish',
      'Safety': 'CE & ETL Certified'
    }
  },
  {
    id: 'p98',
    name: 'Nomad Base Station Apple Watch Edition',
    price: 165000,
    category: 'chargers',
    brand: 'Nomad',
    description: 'Functional, powerful, and timeless wireless hub.',
    image: 'https://images.unsplash.com/photo-1616431940900-5c62d080c9e6?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Materials': 'Padded Leather / Aluminum',
      'Chargers': 'Dual 10W Wireless / Integrated Watch',
      'Ports': 'USB-C / USB-A Output',
      'Sensor': 'Ambient Light Sensor'
    }
  },
  {
    id: 'p99',
    name: 'Belkin BoostCharge Pro 3-in-1',
    price: 145000,
    category: 'chargers',
    brand: 'Belkin',
    description: 'The ultimate MagSafe charging for your Apple ecosystem.',
    image: 'https://images.unsplash.com/photo-1616431940900-5c62d080c9e6?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Standard': 'Official MagSafe 15W',
      'Compatibility': 'iPhone / Watch / AirPods',
      'Design': 'Architecturally Inspired',
      'Fast Charge': 'Apple Watch Series 7/8'
    }
  },
  {
    id: 'p100',
    name: 'Anker MagGo Magnetic Charging Station',
    price: 115000,
    category: 'chargers',
    brand: 'Anker',
    description: 'Orbit your devices with this 8-in-1 magnetic hub.',
    image: 'https://images.unsplash.com/photo-1616431940900-5c62d080c9e6?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Format': '8-in-1 Sphere',
      'MagSafe': 'Compatible',
      'Ports': '3x AC, 2x USB-C, 2x USB-A',
      'Safety': '7-Point Safety System'
    }
  },
  {
    id: 'p101',
    name: 'Shargeek Storm 2 Power Bank',
    price: 225000,
    category: 'chargers',
    brand: 'Sharge',
    description: 'Cyberpunk design. Adjustable DC output.',
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Design': 'Transparent Case',
      'Display': 'IPS Screen',
      'Output': '100W PD',
      'Feature': 'Adjustable voltage'
    }
  },
  {
    id: 'p102',
    name: 'Mophie 3-in-1 Travel Charger',
    price: 155000,
    category: 'chargers',
    brand: 'Mophie',
    description: 'Foldable MagSafe travel kit for elite nomads.',
    image: 'https://images.unsplash.com/photo-1616431940900-5c62d080c9e6?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Utility': 'Travel Case Included',
      'Compatibility': 'MagSafe Verified',
      'Input': 'USB-C',
      'Weight': 'Compact'
    }
  },
  {
    id: 'p103',
    name: 'Zendure SuperPort 4',
    price: 95000,
    category: 'chargers',
    brand: 'Zendure',
    description: 'Compact 100W desktop charger for power users.',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Power': '100W PD',
      'Ports': '2x USB-C, 2x USB-A',
      'Build': 'Sturdy shell',
      'Security': '10-layer protection'
    }
  },
  {
    id: 'p105',
    name: 'Pitaka MagEZ Slider 2',
    price: 135000,
    category: 'chargers',
    brand: 'Pitaka',
    description: 'Versatile 4-in-1 desktop charger with portable bank.',
    image: 'https://images.unsplash.com/photo-1616431940900-5c62d080c9e6?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Type': 'Modular Hub',
      'Bank': 'Detachable Magnetic Bank',
      'Base': '360° Rotating',
      'Watch': 'MFi Certified Port'
    }
  },
  {
    id: 'p106',
    name: 'Aukey Omnia 100W PD',
    price: 45000,
    category: 'chargers',
    brand: 'Aukey',
    description: 'World\'s smallest 100W PD charger.',
    image: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b5d7?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Tech': 'Omnia GaN Chip',
      'Power': '100W',
      'Port': 'Single USB-C',
      'Weight': '150g'
    }
  },
  {
    id: 'p51',
    name: 'Anker Nano II 65W',
    price: 35000,
    category: 'chargers',
    brand: 'Anker',
    description: 'Compact USB-C Gan II charger for phones and tablets.',
    image: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b5d7?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Power': '65W',
      'Type': 'GaN II',
      'Port': '1x USB-C',
      'Compact': '58% smaller'
    }
  },
  {
    id: 'p52',
    name: 'Ugreen Nexode 140W',
    price: 110000,
    category: 'chargers',
    brand: 'Ugreen',
    description: 'Super fast charging for 16-inch M2 MacBook Pro.',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Power': '140W',
      'Protocol': 'PD 3.1',
      'Ports': '2x USB-C, 1x USB-A',
      'Chip': 'GaN Infinity'
    }
  },
  {
    id: 'p53',
    name: 'Baseus Blade 100W Power Bank',
    price: 85000,
    category: 'chargers',
    brand: 'Baseus',
    description: 'Ultra thin high-capacity laptop power bank.',
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Output': '100W PD',
      'Capacity': '20,000mAh',
      'Thickness': '18mm',
      'Ports': '2x USB-C, 2x USB-A'
    }
  },
  {
    id: 'p54',
    name: 'Satechi Trio Wireless Charging Pad',
    price: 125000,
    category: 'chargers',
    brand: 'Satechi',
    description: 'Simultaneously charge iPhone, AirPods, and Watch.',
    image: 'https://images.unsplash.com/photo-1616431940900-5c62d080c9e6?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Type': 'Wireless Hub',
      'Features': 'Magnetic Watch Stand',
      'Finish': 'Space Gray Aluminum',
      'Included': '24W Power Adapter'
    }
  },
  {
    id: 'p55',
    name: 'Anker 735 Charger (GaNPrime 65W)',
    price: 55000,
    category: 'chargers',
    brand: 'Anker',
    description: 'Charge 3 devices at once with GaNPrime tech.',
    image: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b5d7?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Power': '65W',
      'Tech': 'GaNPrime',
      'Ports': '2x USB-C, 1x USB-A',
      'Security': 'ActiveShield 2.0'
    }
  },
  {
    id: 'p56',
    name: 'Belkin 108W 4-Port GaN Charger',
    price: 95000,
    category: 'chargers',
    brand: 'Belkin',
    description: 'Modern desktop charging for all your gear.',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Total Power': '108W',
      'Format': 'Desktop',
      'Cables': '2m Power Cord',
      'Safety': 'Over-current protection'
    }
  },
  {
    id: 'p57',
    name: 'Apple MagSafe Charger',
    price: 45000,
    category: 'chargers',
    brand: 'Apple',
    description: 'Reliable magnetic wireless charging for iPhone.',
    image: 'https://images.unsplash.com/photo-1616431940900-5c62d080c9e6?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Speed': '15W Peak',
      'Compatibility': 'iPhone 12 or later',
      'Type': 'Wireless',
      'Connector': 'USB-C'
    }
  },
  {
    id: 'p58',
    name: 'Baseus 30W Super Si Dual Charger',
    price: 18000,
    category: 'chargers',
    brand: 'Baseus',
    description: 'Mini fast charger with dual port output.',
    image: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b5d7?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Power': '30W',
      'Tech': 'Super Si',
      'Ports': 'USB-C + USB-A',
      'Size': 'Mini'
    }
  },
  {
    id: 'p59',
    name: 'Samsung 25W Wall Charger',
    price: 15000,
    category: 'chargers',
    brand: 'Samsung',
    description: 'Fast charging for basic Samsung Galaxy range.',
    image: 'https://images.unsplash.com/photo-1619623886737-08b26117565c?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Output': '25W',
      'Type': 'PD 3.0 PPS',
      'Compatibility': 'Universal USB-C',
      'Efficiency': 'Level VI'
    }
  },
  {
    id: 'p60',
    name: 'Sony CP-V20 Power Bank',
    price: 65000,
    category: 'chargers',
    brand: 'Sony',
    description: 'Sturdy, long-lasting backup power for travelers.',
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Capacity': '20,000mAh',
      'Safety': 'Safe Charge Tech',
      'Ports': 'Dual Output',
      'Cycles': '1000x Rechargeable'
    }
  },

  // ACCESSORIES (8 items)
  {
    id: 'p6',
    name: 'Sony WH-1000XM5',
    price: 550000,
    category: 'accessories',
    brand: 'Sony',
    description: 'Industry-leading noise canceling with exceptional sound.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Type': 'Over-ear',
      'Battery': '30 hours',
      'Connection': 'Bluetooth 5.2',
      'Features': 'Multipoint connection'
    }
  },
  {
    id: 'p8',
    name: 'Logitech MX Master 3S',
    price: 125000,
    category: 'accessories',
    brand: 'Logitech',
    description: 'The ultimate productivity mouse for pro users.',
    image: 'https://images.unsplash.com/photo-1625773453127-142c174ec62b?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Sensor': '8K DPI Darkfield',
      'Battery': '70 days',
      'Buttons': '7 programmable',
      'Wheel': 'MagSpeed scrolling'
    }
  },
  {
    id: 'p22',
    name: 'AirPods Pro 2nd Gen',
    price: 320000,
    category: 'accessories',
    brand: 'Apple',
    description: 'Adaptive Audio. Pro-level noise cancellation.',
    image: 'https://images.unsplash.com/photo-1588423770111-a393f66bab91?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Chip': 'H2 Chip',
      'Case': 'USB-C MagSafe',
      'Audio': 'Spatial Audio',
      'Life': '6 hours per charge'
    }
  },
  {
    id: 'p23',
    name: 'Keychron Q1 Mechanical Keyboard',
    price: 245000,
    category: 'accessories',
    brand: 'Keychron',
    description: 'Full Aluminum Custom Mechanical Keyboard.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83bac1?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Build': 'CNC Aluminum',
      'Layout': '75%',
      'Switches': 'Gateron G Pro',
      'Hot-swap': 'Yes'
    }
  },
  {
    id: 'p24',
    name: 'Samsung Buds 2 Pro',
    price: 185000,
    category: 'accessories',
    brand: 'Samsung',
    description: '24-bit Hi-Fi audio. Ultimate wireless listening.',
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Audio': '24-bit Hi-Fi',
      'ANC': 'Intelligent',
      'Fit': 'Ergonomic'
    }
  },
  {
    id: 'p25',
    name: 'WD Black SN850X 2TB',
    price: 215000,
    category: 'accessories',
    brand: 'WD',
    description: 'The ultimate gaming storage for PC and PS5.',
    image: 'https://images.unsplash.com/photo-1597872200370-499df51bb44a?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Speed': '7,300MB/s',
      'Interface': 'PCIe Gen4',
      'Heatsink': 'Included'
    }
  },
  {
    id: 'p150',
    name: 'Sony WH-1000XM5',
    price: 380000,
    category: 'accessories',
    brand: 'Sony',
    description: 'Industry-leading noise canceling with exceptional sound.',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Battery': '30 hours',
      'ANC': 'Integrated Processor V1',
      'Audio': '360 Reality Audio',
      'Feature': 'Speak-to-Chat'
    }
  },
  {
    id: 'p151',
    name: 'AirPods Pro (2nd Gen)',
    price: 320000,
    category: 'accessories',
    brand: 'Apple',
    description: 'Rebuilt from the sound up. Up to 2x more Active Noise Cancellation.',
    image: 'https://images.unsplash.com/photo-1588156979435-379b9d802b0a?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Chip': 'H2 chip',
      'ANC': 'Active Noise Cancellation',
      'Audio': 'Personalized Spatial Audio',
      'Transparency': 'Adaptive Transparency'
    }
  },
  {
    id: 'p152',
    name: 'Samsung Galaxy Buds2 Pro',
    price: 185000,
    category: 'accessories',
    brand: 'Samsung',
    description: 'The ultimate wireless audio experience. Crystal clear high-fidelity sound.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Audio': '24-bit Hi-Fi',
      'ANC': 'Intelligent ANC',
      'Design': 'Ergonomic fit',
      'Waterproof': 'IPX7'
    }
  },
  {
    id: 'p153',
    name: 'Apple Watch Ultra 2',
    price: 950000,
    category: 'accessories',
    brand: 'Apple',
    description: 'The most rugged and capable Apple Watch ever.',
    image: 'https://images.unsplash.com/photo-1434493907317-a46b53b81882?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Case': '49mm Titanium',
      'Display': '3000 nits peak',
      'Battery': 'Up to 36 hours normal',
      'Water': '100m resistance'
    },
    isHot: true
  },
  {
    id: 'p154',
    name: 'Anker 737 Power Bank',
    price: 165000,
    category: 'accessories',
    brand: 'Anker',
    description: 'Massive capacity with ultra-fast charging for laptops and phones.',
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Output': '140W max',
      'Capacity': '24,000mAh',
      'Display': 'Smart Digital',
      'Protection': 'ActiveShield 2.0'
    }
  },
  {
    id: 'p155',
    name: 'Oraimo FreePods 4',
    price: 45000,
    category: 'accessories',
    brand: 'Oraimo',
    description: 'Rich sound. Deep bass. Crystal clear calls.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
    specs: {
      'ANC': 'Up to 30dB',
      'Battery': '35.5 hours total',
      'Latency': 'Game Mode support',
      'App': 'Oraimo Sound'
    }
  },
  {
    id: 'p156',
    name: 'Oraimo Toast 10 Flash Power Bank',
    price: 18000,
    category: 'accessories',
    brand: 'Oraimo',
    description: 'Ultra-slim design. High-speed charging.',
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Capacity': '10,000mAh',
      'Output': '22.5W Fast Charge',
      'Format': 'Ultra Slim',
      'Port': 'Type-C input/output'
    }
  },
  {
    id: 'p157',
    name: 'Logitech MX Master 3S',
    price: 135000,
    category: 'accessories',
    brand: 'Logitech',
    description: 'The iconic mouse remastered for ultimate precision.',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93d0941e3d?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Sensor': '8K DPI optical',
      'Clicks': 'Quiet Clicks',
      'Scroll': 'MagSpeed scrolling',
      'Connectivity': 'Bluetooth / Logi Bolt'
    }
  },
  {
    id: 'p158',
    name: 'Shure SM7B Vocal Microphone',
    price: 550000,
    category: 'accessories',
    brand: 'Shure',
    description: 'The industry standard for broadcast, podcast, and studio.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Type': 'Dynamic',
      'Pattern': 'Cardioid',
      'Frequency': '50Hz - 20kHz',
      'Build': 'Rugged construction'
    }
  },
  {
    id: 'p159',
    name: 'Sennheiser HD 660S2',
    price: 680000,
    category: 'accessories',
    brand: 'Sennheiser',
    description: 'Audiophile-grade open-back headphones for pure sound.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Impedance': '300 Ohms',
      'Range': '8Hz - 41.5kHz',
      'Drivers': 'Vented magnet system',
      'Build': 'Premium velour pads'
    }
  },
  {
    id: 'p160',
    name: 'Bose QuietComfort Ultra Headphones',
    price: 495000,
    category: 'accessories',
    brand: 'Bose',
    description: 'Spatial audio. World-class quiet. All-day comfort.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Audio': 'Immersive Audio',
      'ANC': 'CustomTune Technology',
      'Modes': 'Quiet, Aware, Immersion',
      'Battery': 'Up to 24 hours'
    }
  },
  {
    id: 'p161',
    name: 'HyperX QuadCast S',
    price: 215000,
    category: 'accessories',
    brand: 'HyperX',
    description: 'USB condenser microphone with stunning RGB lighting.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Lighting': 'Dynamic RGB',
      'Mount': 'Anti-Vibration shock mount',
      'Sensor': 'Tap-to-Mute with LED',
      'Patterns': 'Four selectable polar patterns'
    }
  },
  {
    id: 'p162',
    name: 'SanDisk 2TB Extreme Portable SSD',
    price: 265000,
    category: 'accessories',
    brand: 'SanDisk',
    description: 'Tough storage that\'s ready for life.',
    image: 'https://images.unsplash.com/photo-1597872200370-499df51bb44a?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Speed': '1050MB/s Read',
      'Durability': 'IP55 Water/Dust',
      'Drop': '2m Protection',
      'Capacity': '2TB'
    }
  },
  {
    id: 'p163',
    name: 'Keychron K2 Wireless Keyboard',
    price: 115000,
    category: 'accessories',
    brand: 'Keychron',
    description: '75% compact mechanical keyboard for Mac and Windows.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83bac1?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Layout': '75% Tenkeyless',
      'Switches': 'Gateron G Pro Mechanical',
      'Battery': '4000mAh',
      'Lighting': 'RGB Backlit'
    }
  },
  {
    id: 'p164',
    name: 'Galaxy Watch 6 Pro',
    price: 385000,
    category: 'accessories',
    brand: 'Samsung',
    description: 'Know your health better. Sleep, fitness, and heart tracking.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Display': '1.5-inch Sapphire Crystal',
      'Body': 'Armor Aluminum',
      'Health': 'Body Composition Analysis',
      'GPS': 'Advanced Track Run'
    }
  },
  {
    id: 'p165',
    name: 'Baseus 65W Power Bank 20000mAh',
    price: 48000,
    category: 'accessories',
    brand: 'Baseus',
    description: 'High capacity power with laptop-ready charging speed.',
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Output': '65W PD Fast Charge',
      'Capacity': '20,000mAh',
      'Input': 'Type-C 60W',
      'Ports': '2x USB-A, 1x USB-C'
    }
  },
  {
    id: 'p166',
    name: 'Sony DualSense Wireless Controller',
    price: 95000,
    category: 'accessories',
    brand: 'Sony',
    description: 'Discover a deeper, highly immersive gaming experience.',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Feedback': 'Haptic feedback',
      'Triggers': 'Adaptive triggers',
      'Mic': 'Built-in microphone',
      'Audio': '3.5mm jack'
    }
  },
  {
    id: 'p167',
    name: 'Apple MagSafe Battery Pack',
    price: 135000,
    category: 'accessories',
    brand: 'Apple',
    description: 'Attaching the MagSafe Battery Pack is a snap.',
    image: 'https://images.unsplash.com/photo-1616431940900-5c62d080c9e6?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Attachment': 'Magnetic',
      'Charging': 'Wireless',
      'Integration': 'View health in iOS',
      'Connector': 'Lightning'
    }
  },
  {
    id: 'p168',
    name: 'Logitech G733 Lightspeed',
    price: 185000,
    category: 'accessories',
    brand: 'Logitech',
    description: 'Wireless gaming headset designed for performance and comfort.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Wireless': 'LIGHTSPEED',
      'Lighting': 'FRONT-FACING RGB',
      'Audio': 'Blue VO!CE filters',
      'Battery': '29 hours'
    }
  },
  {
    id: 'p169',
    name: 'Western Digital Black SN850X 2TB',
    price: 245000,
    category: 'accessories',
    brand: 'WD',
    description: 'Elite gaming storage for the PS5 and high-end PCs.',
    image: 'https://images.unsplash.com/photo-1597872200370-499df51bb44a?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Speed': '7,300MB/s',
      'Interface': 'PCIe Gen4 x4',
      'Capacity': '2TB',
      'Build': 'Heatsink included'
    }
  },
  {
    id: 'p170',
    name: 'Garmin Fenix 7 Pro',
    price: 850000,
    category: 'accessories',
    brand: 'Garmin',
    description: 'The ultimate multisport GPS watch with solar charging.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Lens': 'Power Sapphire Solar',
      'Health': 'Heart Rate, Pulse Ox',
      'Maps': 'Preloaded TopoActive',
      'Battery': 'Up to 22 days'
    }
  },
  {
    id: 'p171',
    name: 'Razer Naga V2 Pro',
    price: 195000,
    category: 'accessories',
    brand: 'Razer',
    description: 'Interchangeable side plates for MMO, MOBA, and FPS gaming.',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93d0941e3d?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Sensor': 'Focus Pro 30K Optical',
      'Plates': '3 Swappable Side Plates',
      'Wireless': 'HyperSpeed & Bluetooth',
      'Scroll': 'HyperScroll Pro Wheel'
    }
  },
  {
    id: 'p172',
    name: 'Sony INZONE M9 Monitor',
    price: 1100000,
    category: 'accessories',
    brand: 'Sony',
    description: '4K Full Array Local Dimming gaming monitor.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Resolution': '4K QFHD',
      'Panel': 'IPS with Full Array',
      'Refresh': '144Hz',
      'HDR': 'DisplayHDR 600'
    }
  },
  {
    id: 'p173',
    name: 'Nothing Ear (2)',
    price: 145000,
    category: 'accessories',
    brand: 'Nothing',
    description: 'Iconic transparent design. Studio-grade sound.',
    image: 'https://images.unsplash.com/photo-1689100063259-7d8b5c90d561?auto=format&fit=crop&q=80&w=800',
    specs: {
      'ANC': 'Personalized ANC',
      'Audio': 'Hi-Res Audio Certified',
      'Driver': '11.6mm Custom Driver',
      'IP': 'IP54 Resistant'
    }
  },
  {
    id: 'p174',
    name: 'Instax Mini 12',
    price: 115000,
    category: 'accessories',
    brand: 'Fujifilm',
    description: 'Capture the moment and print it instantly.',
    image: 'https://images.unsplash.com/photo-1526170315870-efeca6325d4b?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Exposure': 'Automatic',
      'Mirror': 'Selfie built-in',
      'Focus': 'Close-up mode',
      'Flash': 'Built-in constant'
    }
  },
  {
    id: 'p175',
    name: 'Elgato Facecam Pro',
    price: 365000,
    category: 'accessories',
    brand: 'Elgato',
    description: 'The world\'s first 4K60 webcam. Professional grade.',
    image: 'https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Res': '4K at 60fps',
      'Sensor': 'Sony STARVIS',
      'Focus': 'Autofocus',
      'FOV': '90-degree wide angle'
    }
  },
  {
    id: 'p176',
    name: 'Marshall Emberton II',
    price: 185000,
    category: 'accessories',
    brand: 'Marshall',
    description: 'Tough and resilient portable speaker with iconic sound.',
    image: 'https://images.unsplash.com/photo-1589578594227-aa859ecf0f29?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Audio': 'True Stereophonic',
      'Battery': '30+ hours',
      'Rating': 'IP67 Waterproof',
      'Bluetooth': 'V5.1'
    }
  },
  {
    id: 'p177',
    name: 'SteelSeries Arena 7',
    price: 345000,
    category: 'accessories',
    brand: 'SteelSeries',
    description: '2.1 gaming speaker system with reactive PrismSync.',
    image: 'https://images.unsplash.com/photo-1589578594227-aa859ecf0f29?auto=format&fit=crop&q=80&w=800',
    specs: {
      'System': '2.1 Speakers',
      'Lighting': 'PrismSync RGB',
      'Subwoofer': '6.5-inch downward firing',
      'Connectivity': 'USB / Bluetooth / Optical / 3.5mm'
    }
  },
  {
    id: 'p178',
    name: 'Corsair Virtuoso RGB Wireless XT',
    price: 325000,
    category: 'accessories',
    brand: 'Corsair',
    description: 'Hyper-fast wireless gaming headset with high-fidelity audio.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Audio': '24-bit/96kHz Hi-Res',
      'Wireless': 'SLIPSTREAM & Bluetooth',
      'Build': 'Machined Aluminum',
      'Mic': 'Broadcast-grade detachable'
    }
  },
  {
    id: 'p179',
    name: 'Nanoleaf Shapes Triangles',
    price: 245000,
    category: 'accessories',
    brand: 'Nanoleaf',
    description: 'Intelligent modular light panels for the ultimate setup.',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93d0941e3d?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Type': 'Modular LED',
      'Colors': '16M+',
      'Feature': 'Music Visualizer',
      'Interaction': 'Touch sensitive'
    }
  },
  {
    id: 'p180',
    name: 'Elgato Ring Light',
    price: 215000,
    category: 'accessories',
    brand: 'Elgato',
    description: 'Premium edge-lit ring light for streamers.',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93d0941e3d?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Brightness': '2500 Lumens',
      'Temp': '2900 - 7000 K',
      'LEDs': 'OSRAM Premium',
      'Control': 'Wi-Fi app-controlled'
    }
  },
  {
    id: 'p119',
    name: 'Western Digital 12TB My Book',
    price: 195000,
    category: 'accessories',
    brand: 'WD',
    description: 'Massive capacity desktop storage with password protection.',
    image: 'https://images.unsplash.com/photo-1597872200370-499df51bb44a?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Capacity': '12TB',
      'Interface': 'USB 3.0',
      'Software': 'WD Backup & Security',
      'Format': 'Desktop External'
    }
  }
];
