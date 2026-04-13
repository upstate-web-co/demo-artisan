export const SITE = {
  name: 'Wren & Fable Studio',
  tagline: 'Handmade candles, soaps & home goods',
  url: 'https://wrenandfable.com',
  email: 'hello@wrenandfable.com',
  phone: '(864) 555-4821',
  location: 'Greenville, SC',
} as const

export const PRODUCTS = [
  { name: 'Fireside Soy Candle', price: '$28', category: 'Candles', image: 'https://images.unsplash.com/photo-1603905156407-80907e4e5de1?w=500&q=80', description: 'Woodsmoke, amber, and vanilla. 60-hour burn. Hand-poured soy wax.' },
  { name: 'Lavender Field Candle', price: '$24', category: 'Candles', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80', description: 'French lavender, chamomile, and cedarwood. 50-hour burn.' },
  { name: 'Honey Oat Soap Bar', price: '$12', category: 'Soaps', image: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=500&q=80', description: 'Local honey, colloidal oatmeal, shea butter. Gentle on sensitive skin.' },
  { name: 'Charcoal Detox Soap', price: '$14', category: 'Soaps', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80', description: 'Activated charcoal, tea tree, eucalyptus. Deep-cleansing face and body bar.' },
  { name: 'Linen Room Spray', price: '$18', category: 'Home', image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&q=80', description: 'Fresh linen, white tea, soft musk. 4oz glass bottle.' },
  { name: 'Beeswax Wrap Set', price: '$22', category: 'Home', image: 'https://images.unsplash.com/photo-1547481887-a26e2cacb5b2?w=500&q=80', description: 'Set of 3 reusable food wraps. Local beeswax, organic cotton, jojoba oil.' },
  { name: 'Gift Box — The Essentials', price: '$58', category: 'Gifts', image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500&q=80', description: 'Fireside candle + Honey Oat soap + Linen spray. Gift-wrapped.' },
  { name: 'Gift Box — Self Care', price: '$72', category: 'Gifts', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238f64e?w=500&q=80', description: 'Lavender candle + both soaps + room spray + beeswax wraps. Ribbon-tied.' },
]

export const MARKETS = [
  { name: 'Riverside Artisan Market (Saturdays)', day: 'Every Saturday', time: '8am – 12pm', season: 'Apr – Oct' },
  { name: 'Downtown Makers Fair (First Fridays)', day: '1st & 3rd Saturday', time: '9am – 1pm', season: 'Year-round' },
  { name: 'Hillside Craft Market', day: '2nd Saturday', time: '9am – 12pm', season: 'May – Sep' },
  { name: 'The Collective — year-round retail partner', day: 'Daily', time: 'Store hours', season: 'Year-round retail' },
]
