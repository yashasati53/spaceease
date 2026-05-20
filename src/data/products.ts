export type Category = 
  | 'Space Organization'
  | 'Home Décor'
  | 'Furniture'
  | 'Workspace Essentials'
  | 'Bathroom Organizer';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: Category;
  description: string;
  stock: number;
  originalPrice?: number;
}

export const products: Product[] = [
  // 1. Space Organization
  {
    id: "so-1",
    name: "Foldable Storage Box",
    price: 1200,
    imageUrl: "/foldable-storage-box.jpg",
    category: "Space Organization",
    description: "Versatile foldable storage box ideal for keeping your bedroom and closet organized.",
    stock: 45
  },
  {
    id: "so-2",
    name: "Drawer Organizer",
    price: 850,
    imageUrl: "/drawer-organizer.jpg",
    category: "Space Organization",
    description: "A compact drawer organizer set to neatly separate your accessories and essentials.",
    stock: 60
  },
  {
    id: "so-3",
    name: "Wardrobe Storage Basket",
    price: 1500,
    imageUrl: "/wardrobe-basket.jpg",
    category: "Space Organization",
    description: "Sturdy fabric storage baskets designed to fit perfectly on your wardrobe shelves.",
    stock: 30
  },
  {
    id: "so-4",
    name: "Shoe Rack",
    price: 2500,
    imageUrl: "/shoe-rack.jpg",
    category: "Space Organization",
    description: "Space-saving multi-tier shoe rack for the modern entryway.",
    stock: 25
  },

  // 2. Home Décor
  {
    id: "hd-1",
    name: "Minimal Wall Art",
    price: 3200,
    imageUrl: "/minimal-wall-art.jpg",
    category: "Home Décor",
    description: "Elegant abstract minimal wall art to elevate your living room aesthetic.",
    stock: 15
  },
  {
    id: "hd-2",
    name: "Ceramic Vase",
    price: 1800,
    imageUrl: "/ceramic-vase.jpg",
    category: "Home Décor",
    description: "Handcrafted matte ceramic vase, perfect for dried florals or as a standalone piece.",
    stock: 20
  },
  {
    id: "hd-3",
    name: "Scented Candle",
    price: 950,
    imageUrl: "/scented-candle.jpg",
    category: "Home Décor",
    description: "Natural soy wax scented candle with soothing essential oils.",
    stock: 50
  },
  {
    id: "hd-4",
    name: "Decorative Mirror",
    price: 4500,
    imageUrl: "/decorative-mirror.jpg",
    category: "Home Décor",
    description: "A minimalist round decorative mirror that adds depth and light to any small space.",
    stock: 10
  },

  // 3. Furniture
  {
    id: "fu-1",
    name: "Compact Study Table",
    price: 6500,
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    description: "A sleek, compact study table that fits easily into tight apartment corners.",
    stock: 12
  },
  {
    id: "fu-2",
    name: "Storage Ottoman",
    price: 3800,
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    description: "A comfortable seating ottoman with a hidden storage compartment.",
    stock: 18
  },
  {
    id: "fu-3",
    name: "Side Table",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    description: "Minimalist side table for your living room or bedroom.",
    stock: 22
  },
  {
    id: "fu-4",
    name: "Modular Shelf",
    price: 5500,
    imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    description: "Build-it-yourself modular shelving unit for displaying books and decor.",
    stock: 8
  },

  // 4. Workspace Essentials
  {
    id: "we-1",
    name: "LED Desk Lamp",
    price: 1500,
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
    category: "Workspace Essentials",
    description: "Energy-efficient LED desk lamp with adjustable brightness.",
    stock: 35
  },
  {
    id: "we-2",
    name: "Laptop Stand",
    price: 1299,
    imageUrl: "/Laptop Stand.jpeg",
    category: "Workspace Essentials",
    description: "A sleek rental-friendly laptop stand designed to improve posture, enhance laptop airflow, and create a clean modern workspace. Material: Aluminum alloy.",
    stock: 40
  },
  {
    id: "we-3",
    name: "Desk Organizer",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80",
    category: "Workspace Essentials",
    description: "Keep your pens, notes, and accessories tidy with this sleek organizer.",
    stock: 50
  },
  {
    id: "we-4",
    name: "Ergonomic Chair",
    price: 9500,
    imageUrl: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
    category: "Workspace Essentials",
    description: "Highly adjustable ergonomic chair for long hours of comfortable work.",
    stock: 15
  },

  // 6. Bathroom Organizer
  {
    id: "bo-1",
    name: "Bathroom Organizer",
    price: 1400,
    imageUrl: "/bathroom organizer.jpeg",
    category: "Bathroom Organizer",
    description: "Multi-purpose bathroom organizer caddy for your toiletries.",
    stock: 25
  },
  {
    id: "bo-2",
    name: "Soap Dispenser Set",
    price: 1100,
    imageUrl: "/soap-dispenser.png",
    category: "Bathroom Organizer",
    description: "Elegant refillable soap and lotion dispenser set.",
    stock: 30
  },
  {
    id: "bo-3",
    name: "Bathroom Storage Shelf",
    price: 2200,
    imageUrl: "/Bathroom storage shelf.jpeg",
    category: "Bathroom Organizer",
    description: "Wall-mounted storage shelf designed for compact bathrooms.",
    stock: 20
  },
  {
    id: "bo-4",
    name: "Bath Towel Set",
    price: 1440,
    originalPrice: 1800,
    imageUrl: "/Bath towel set.jpeg",
    category: "Bathroom Organizer",
    description: "Plush, ultra-absorbent bath towel set made from organic cotton.",
    stock: 35
  }
];

export const getProductsByCategory = (category: Category) => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

