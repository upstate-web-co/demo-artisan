export const SITE = {
  name: 'Ember & Oak Studio',
  tagline: 'Handmade candles, soaps & home goods',
  url: 'https://emberandoak.com',
  email: 'hello@emberandoak.com',
  phone: '(864) 555-4821',
  location: 'Travelers Rest, SC',
} as const

export const PRODUCTS = [
  { name: 'Fireside Soy Candle', price: '$28', category: 'Candles', image: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=500&q=80', description: 'Woodsmoke, amber, and vanilla. 60-hour burn. Hand-poured soy wax.' },
  { name: 'Lavender Field Candle', price: '$24', category: 'Candles', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80', description: 'French lavender, chamomile, and cedarwood. 50-hour burn.' },
  { name: 'Honey Oat Soap Bar', price: '$12', category: 'Soaps', image: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=500&q=80', description: 'Local honey, colloidal oatmeal, shea butter. Gentle on sensitive skin.' },
  { name: 'Charcoal Detox Soap', price: '$14', category: 'Soaps', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80', description: 'Activated charcoal, tea tree, eucalyptus. Deep-cleansing face and body bar.' },
  { name: 'Linen Room Spray', price: '$18', category: 'Home', image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&q=80', description: 'Fresh linen, white tea, soft musk. 4oz glass bottle.' },
  { name: 'Beeswax Wrap Set', price: '$22', category: 'Home', image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=500&q=80', description: 'Set of 3 reusable food wraps. Local beeswax, organic cotton, jojoba oil.' },
  { name: 'Gift Box — The Essentials', price: '$58', category: 'Gifts', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80', description: 'Fireside candle + Honey Oat soap + Linen spray. Gift-wrapped.' },
  { name: 'Gift Box — Self Care', price: '$72', category: 'Gifts', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&q=80', description: 'Lavender candle + both soaps + room spray + beeswax wraps. Ribbon-tied.' },
]

export const PROCESS_STEPS = [
  { icon: '🪵', title: 'Source', description: 'We start with 100% soy wax, cotton wicks, and ingredients we can pronounce. Local honey, organic oils, real botanicals.' },
  { icon: '🫗', title: 'Pour', description: 'Every candle is hand-poured in small batches in our Travelers Rest studio. No machines, no shortcuts.' },
  { icon: '⏳', title: 'Cure', description: 'Each candle cures for 2 weeks before it ships. This lets the scent fully bond with the wax for a cleaner, stronger burn.' },
]

export const MAKER_QUOTE = 'I believe your home should smell like your favorite memory.'

export const MARKETS = [
  { name: 'Travelers Rest Farmers Market', day: 'Every Saturday', time: '8am – 12pm', season: 'Apr – Oct' },
  { name: 'TD Saturday Market (Downtown GVL)', day: '1st & 3rd Saturday', time: '9am – 1pm', season: 'Year-round' },
  { name: 'Greer Station Market', day: '2nd Saturday', time: '9am – 12pm', season: 'May – Sep' },
  { name: 'Main Collective (Taylors)', day: 'Daily', time: 'Store hours', season: 'Year-round retail' },
]
