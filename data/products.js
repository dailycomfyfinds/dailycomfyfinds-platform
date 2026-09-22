const products = [
  {
    slug: 'under-cabinet-light',
    name: 'Motion Sensor Under-Cabinet Light',
    market: 'US',
    summary: 'A rechargeable, low-profile lighting upgrade that quietly improves kitchen organization.',
    score: 6.9,
    utility: 7.0,
    value: 6.8,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    reasons: ['Strong value for a daily use case', 'Magnetic install without tools', 'Rechargeable instead of disposable batteries'],
    bestFor: ['Small kitchens', 'Cabinets', 'General daily utility'],
  },
  {
    slug: 'drawer-organizer',
    name: 'Expandable Drawer Organizer',
    market: 'US',
    summary: 'A classic clutter-buster designed for utensil, prep, and kitchen organization.',
    score: 6.7,
    utility: 6.8,
    value: 6.6,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
    reasons: ['Fits multiple drawer sizes', 'Improves kitchen workflow', 'Simple, durable design'],
    bestFor: ['Drawer storage', 'Kitchens', 'Daily habit upgrades'],
  },
  {
    slug: 'desk-lamp',
    name: 'Minimal LED Desk Lamp',
    market: 'UAE',
    summary: 'A focused lighting solution that adds comfort and clarity without visual clutter.',
    score: 6.8,
    utility: 6.9,
    value: 6.7,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    reasons: ['Improves work comfort', 'Warm lighting profile', 'Compact enough for small desks'],
    bestFor: ['Home offices', 'Study spaces', 'Focused routines'],
  },
  {
    slug: 'portable-speaker',
    name: 'Compact Portable Speaker',
    market: 'EG',
    summary: 'A practical audio pick for rooms, travel, and small sharing moments.',
    score: 6.6,
    utility: 6.7,
    value: 6.5,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80',
    reasons: ['Portable and easy to carry', 'Useful for daily routines', 'Strong value in small format'],
    bestFor: ['Travel', 'Workspaces', 'Room audio'],
  },
];

const stores = [
  { name: 'Amazon (Global)', region: 'US', description: 'The largest global marketplace for practical everyday products.' },
  { name: 'Noon', region: 'UAE', description: 'A strong regional storefront for convenience and value-seeking shopping.' },
  { name: 'Jumia', region: 'EG', description: 'A leading commerce platform across North Africa and everyday essentials.' },
  { name: 'Walmart', region: 'US', description: 'A trusted retail option for accessible household and utility products.' },
];

export { products, stores };
