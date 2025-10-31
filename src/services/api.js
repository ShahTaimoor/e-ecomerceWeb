// API service for fetching products and categories
// This can be replaced with actual API endpoints later

// Category definitions with images from collections folder
const CATEGORIES = [
  {
    id: 'ottoman-divan-sets',
    name: 'Ottoman Divan Sets',
    slug: 'ottoman-divan-sets',
    image: '/images/collections/collection1.jpg',
    description: 'Premium Ottoman Divan Sets with hidden storage',
    productCount: 8,
  },
  {
    id: 'ottoman-bed-frames',
    name: 'Ottoman Bed Frames',
    slug: 'ottoman-bed-frames',
    image: '/images/collections/collection2.jpg',
    description: 'Elegant Ottoman Bed Frames for modern bedrooms',
    productCount: 6,
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    slug: 'mattresses',
    image: '/images/collections/collection3.jpg',
    description: 'Comfortable and supportive mattresses',
    productCount: 5,
  },
  {
    id: 'headboards',
    name: 'Headboards',
    slug: 'headboards',
    image: '/images/collections/collection4.jpg',
    description: 'Stylish upholstered headboards',
    productCount: 4,
  },
  {
    id: 'ottoman-storage-boxes',
    name: 'Ottoman Storage Boxes',
    slug: 'ottoman-storage-boxes',
    image: '/images/collections/collection5.jpg',
    description: 'Practical storage solutions for your bedroom',
    productCount: 3,
  },
  {
    id: 'mattress-recycling',
    name: 'Mattress Recycling',
    slug: 'mattress-recycling',
    image: '/images/collections/collection1.jpg',
    description: 'Eco-friendly mattress collection and recycling',
    productCount: 1,
  },
];

const PRODUCTS = [
  // Ottoman Divan Sets
  {
    id: 1,
    name: 'Chesterfield Ottoman Divan Bed Set',
    image: '/images/collections/collection1.jpg',
    price: 299.95,
    originalPrice: 599.95,
    onSale: true,
    category: 'ottoman-divan-sets',
    description: 'Chesterfield Ottoman Divan Bed Set combines elegant design with practical storage.',
  },
  {
    id: 2,
    name: 'Classic Ottoman Divan Bed Set',
    image: '/images/collections/collection2.jpg',
    price: 299.95,
    originalPrice: 599.95,
    onSale: true,
    category: 'ottoman-divan-sets',
    description: 'Classic Ottoman Divan Bed Set features premium quality materials.',
  },
  {
    id: 3,
    name: 'Hana Ottoman Divan Bed Set',
    image: '/images/collections/collection3.jpg',
    price: 299.95,
    originalPrice: 599.95,
    onSale: true,
    category: 'ottoman-divan-sets',
    description: 'Hana Ottoman Divan Bed Set perfect for maximizing space.',
  },
  {
    id: 4,
    name: 'Modern Ottoman Divan Bed Set',
    image: '/images/collections/collection1.jpg',
    price: 349.95,
    originalPrice: 699.95,
    onSale: true,
    category: 'ottoman-divan-sets',
    description: 'Modern Ottoman Divan Bed Set with British craftsmanship.',
  },
  {
    id: 5,
    name: 'Luxury Ottoman Divan Bed Set',
    image: '/images/collections/collection2.jpg',
    price: 399.95,
    originalPrice: 799.95,
    onSale: true,
    category: 'ottoman-divan-sets',
    description: 'Luxury Ottoman Divan Bed Set with hidden storage.',
  },
  {
    id: 6,
    name: 'Elegant Ottoman Divan Bed Set',
    image: '/images/collections/collection3.jpg',
    price: 449.95,
    originalPrice: 899.95,
    onSale: true,
    category: 'ottoman-divan-sets',
    description: 'Elegant Ottoman Divan Bed Set for modern bedrooms.',
  },
  {
    id: 7,
    name: 'Premium Ottoman Divan Bed Set',
    image: '/images/collections/collection4.jpg',
    price: 499.95,
    originalPrice: 999.95,
    onSale: true,
    category: 'ottoman-divan-sets',
    description: 'Premium Ottoman Divan Bed Set with luxury features.',
  },
  {
    id: 8,
    name: 'Contemporary Ottoman Divan Bed Set',
    image: '/images/collections/collection5.jpg',
    price: 379.95,
    originalPrice: 759.95,
    onSale: true,
    category: 'ottoman-divan-sets',
    description: 'Contemporary Ottoman Divan Bed Set for stylish bedrooms.',
  },
  
  // Ottoman Bed Frames
  {
    id: 201,
    name: 'Sleek Ottoman Bed Frame',
    image: '/images/collections/collection2.jpg',
    price: 249.95,
    originalPrice: 499.95,
    onSale: true,
    category: 'ottoman-bed-frames',
    description: 'Sleek Ottoman Bed Frame with modern design.',
  },
  {
    id: 202,
    name: 'Classic Ottoman Bed Frame',
    image: '/images/collections/collection3.jpg',
    price: 229.95,
    originalPrice: 459.95,
    onSale: true,
    category: 'ottoman-bed-frames',
    description: 'Classic Ottoman Bed Frame with elegant styling.',
  },
  {
    id: 203,
    name: 'Luxury Ottoman Bed Frame',
    image: '/images/collections/collection1.jpg',
    price: 279.95,
    originalPrice: 559.95,
    onSale: true,
    category: 'ottoman-bed-frames',
    description: 'Luxury Ottoman Bed Frame with premium finish.',
  },
  {
    id: 204,
    name: 'Modern Ottoman Bed Frame',
    image: '/images/collections/collection4.jpg',
    price: 259.95,
    originalPrice: 519.95,
    onSale: true,
    category: 'ottoman-bed-frames',
    description: 'Modern Ottoman Bed Frame for contemporary bedrooms.',
  },
  {
    id: 205,
    name: 'Minimalist Ottoman Bed Frame',
    image: '/images/collections/collection5.jpg',
    price: 219.95,
    originalPrice: 439.95,
    onSale: true,
    category: 'ottoman-bed-frames',
    description: 'Minimalist Ottoman Bed Frame with clean lines.',
  },
  {
    id: 206,
    name: 'Designer Ottoman Bed Frame',
    image: '/images/collections/collection2.jpg',
    price: 299.95,
    originalPrice: 599.95,
    onSale: true,
    category: 'ottoman-bed-frames',
    description: 'Designer Ottoman Bed Frame with unique styling.',
  },
  
  // Mattresses
  {
    id: 301,
    name: 'Vitality Sensation 2000 Pocket Sprung Mattress',
    image: '/images/collections/collection3.jpg',
    price: 239.95,
    originalPrice: 479.95,
    onSale: true,
    category: 'mattresses',
    comfortLevel: 'Medium Comfort',
    description: 'Vitality Sensation 2000 Pocket Sprung Mattress for optimal support.',
  },
  {
    id: 302,
    name: 'Memory Foam Orthopedic Mattress',
    image: '/images/collections/collection1.jpg',
    price: 279.95,
    originalPrice: 559.95,
    onSale: true,
    category: 'mattresses',
    comfortLevel: 'Firm Comfort',
    description: 'Memory Foam Orthopedic Mattress for back support.',
  },
  {
    id: 303,
    name: 'Luxury Hybrid Mattress',
    image: '/images/collections/collection4.jpg',
    price: 329.95,
    originalPrice: 659.95,
    onSale: true,
    category: 'mattresses',
    comfortLevel: 'Plush Comfort',
    description: 'Luxury Hybrid Mattress combining springs and memory foam.',
  },
  {
    id: 304,
    name: 'Cooling Gel Memory Foam Mattress',
    image: '/images/collections/collection5.jpg',
    price: 299.95,
    originalPrice: 599.95,
    onSale: true,
    category: 'mattresses',
    comfortLevel: 'Medium-Firm Comfort',
    description: 'Cooling Gel Memory Foam Mattress for temperature regulation.',
  },
  {
    id: 305,
    name: 'Pocket Sprung Pillow Top Mattress',
    image: '/images/collections/collection2.jpg',
    price: 259.95,
    originalPrice: 519.95,
    onSale: true,
    category: 'mattresses',
    comfortLevel: 'Soft Comfort',
    description: 'Pocket Sprung Pillow Top Mattress for ultimate comfort.',
  },
  
  // Headboards
  {
    id: 401,
    name: 'Chesterfield Traditional Upholstered Headboard',
    image: '/images/collections/collection4.jpg',
    price: 99.95,
    originalPrice: 199.95,
    onSale: true,
    category: 'headboards',
    description: 'Chesterfield Traditional Upholstered Headboard with classic button detailing.',
  },
  {
    id: 402,
    name: 'Modern Padded Headboard',
    image: '/images/collections/collection3.jpg',
    price: 89.95,
    originalPrice: 179.95,
    onSale: true,
    category: 'headboards',
    description: 'Modern Padded Headboard with sleek design.',
  },
  {
    id: 403,
    name: 'Wingback Headboard',
    image: '/images/collections/collection1.jpg',
    price: 119.95,
    originalPrice: 239.95,
    onSale: true,
    category: 'headboards',
    description: 'Wingback Headboard with elegant curves.',
  },
  {
    id: 404,
    name: 'Buttoned Fabric Headboard',
    image: '/images/collections/collection5.jpg',
    price: 79.95,
    originalPrice: 159.95,
    onSale: true,
    category: 'headboards',
    description: 'Buttoned Fabric Headboard with tufted design.',
  },
  
  // Ottoman Storage Boxes
  {
    id: 501,
    name: 'Chesterfield Ottoman Blanket Storage Box',
    image: '/images/collections/collection5.jpg',
    price: 169.95,
    originalPrice: 339.95,
    onSale: true,
    category: 'ottoman-storage-boxes',
    description: 'Chesterfield Ottoman Blanket Storage Box for extra storage.',
  },
  {
    id: 502,
    name: 'Large Ottoman Storage Box',
    image: '/images/collections/collection1.jpg',
    price: 149.95,
    originalPrice: 299.95,
    onSale: true,
    category: 'ottoman-storage-boxes',
    description: 'Large Ottoman Storage Box for bedding and linens.',
  },
  {
    id: 503,
    name: 'Premium Ottoman Storage Box',
    image: '/images/collections/collection2.jpg',
    price: 189.95,
    originalPrice: 379.95,
    onSale: true,
    category: 'ottoman-storage-boxes',
    description: 'Premium Ottoman Storage Box with premium finish.',
  },
  
  // Mattress Recycling
  {
    id: 601,
    name: 'Old Divan Bed Collection/Recycle',
    image: '/images/collections/collection4.jpg',
    price: 99.95,
    originalPrice: 199.95,
    onSale: true,
    category: 'mattress-recycling',
    description: 'Old Divan Bed Collection/Recycle service - eco-friendly disposal.',
  },
];

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = async (category = null) => {
  await delay(300); // Simulate network delay
  if (category) {
    // Map category names to slugs for filtering
    const categoryMap = {
      'divan': 'ottoman-divan-sets',
      'bedframes': 'ottoman-bed-frames',
      'mattresses': 'mattresses',
      'headboards': 'headboards',
      'storage': 'ottoman-storage-boxes',
      'recycling': 'mattress-recycling',
    };
    const categorySlug = categoryMap[category] || category;
    return PRODUCTS.filter((p) => p.category === categorySlug);
  }
  return PRODUCTS;
};

export const fetchProductById = async (id) => {
  await delay(200);
  const product = PRODUCTS.find((p) => p.id === parseInt(id));
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

export const searchProducts = async (query) => {
  await delay(300);
  const lowerQuery = query.toLowerCase();
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description?.toLowerCase().includes(lowerQuery)
  );
};

// Category API functions
export const fetchCategories = async () => {
  await delay(200);
  return CATEGORIES;
};

export const fetchCategoryBySlug = async (slug) => {
  await delay(200);
  const category = CATEGORIES.find((c) => c.slug === slug || c.id === slug);
  if (!category) {
    throw new Error('Category not found');
  }
  return category;
};

// Export categories for use in components
export { CATEGORIES, PRODUCTS };

