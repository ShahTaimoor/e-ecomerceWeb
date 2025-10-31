import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import ShoppingCart from './ShoppingCart';
import Footer from './Footer';

const ProductsPage = ({ isOpen, onClose, category, onNavClick, onCartClick, activeCategory, isCartOpen, onCloseCart, onProductClick }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);
  
  // Handle click outside to close filter
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Get the target element
      const target = event.target;
      
      // Check if click is inside main content area (products grid)
      const mainContent = document.querySelector('.products-grid-container');
      
      // Only close if clicking on main content area
      if (mainContent && mainContent.contains(target)) {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isFilterOpen]);
  
  const products = [
    {
      id: 1,
      name: 'Chesterfield Ottoman Divan Bed Set',
      image: '/images/banners/banner1.jpg',
      price: 299.95,
      originalPrice: 599.95,
      onSale: true
    },
    {
      id: 2,
      name: 'Classic Ottoman Divan Bed Set',
      image: '/images/banners/banner2.jpg',
      price: 299.95,
      originalPrice: 599.95,
      onSale: true
    },
    {
      id: 3,
      name: 'Hana Ottoman Divan Bed Set',
      image: '/images/banners/banner3.jpg',
      price: 299.95,
      originalPrice: 599.95,
      onSale: true
    },
    {
      id: 4,
      name: 'Modern Ottoman Divan Bed Set',
      image: '/images/collections/collection1.jpg',
      price: 349.95,
      originalPrice: 699.95,
      onSale: true
    },
    {
      id: 5,
      name: 'Luxury Ottoman Divan Bed Set',
      image: '/images/collections/collection2.jpg',
      price: 399.95,
      originalPrice: 799.95,
      onSale: true
    },
    {
      id: 6,
      name: 'Elegant Ottoman Divan Bed Set',
      image: '/images/collections/collection3.jpg',
      price: 449.95,
      originalPrice: 899.95,
      onSale: true
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onCartClick={onCartClick} onNavClick={onNavClick} activeCategory={activeCategory} />

      {/* Main Content */}
      <div className="pt-[186px] flex">
        {/* Filter Sidebar */}
        {isFilterOpen && (
          <div ref={filterRef} className="w-64 bg-white border-r border-gray-300 p-6 flex-shrink-0 sticky top-[176px] h-[calc(100vh-176px)] overflow-y-auto z-30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Filters</h3>
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Availability Filter */}
            <div className="mb-6 border-b pb-4">
              <button className="flex items-center justify-between w-full text-left">
                <h4 className="font-semibold text-lg">Availability</h4>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Price Filter */}
            <div className="mb-6 border-b pb-4">
              <button className="flex items-center justify-between w-full text-left">
                <h4 className="font-semibold text-lg">Price</h4>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        )}
        
        {/* Content Section */}
        <div className="flex-1">
          {/* Filter and Sort Section */}
          <div className="container mx-auto px-4 py-6 border-b">
            <div className="flex justify-between items-center">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                data-filter-button
                className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  <circle cx="8" cy="6" r="1" fill="currentColor" />
                  <circle cx="8" cy="12" r="1" fill="currentColor" />
                  <circle cx="8" cy="18" r="1" fill="currentColor" />
                </svg>
                Filter
              </button>

              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by</span>
                <select className="px-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:border-gray-400">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="container mx-auto px-4 py-8">
            <div className="products-grid-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {/* Product Image */}
              <div className="relative cursor-pointer" onClick={() => onProductClick && onProductClick(product)}>
                <div className={`overflow-hidden ${isFilterOpen ? 'h-48' : 'h-64'}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Sale Badge */}
                {product.onSale && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white font-bold px-4 py-2 rounded">
                    Sale
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-red-600">
                    From £{product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-lg">
                      £{product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Shopping Cart */}
      <ShoppingCart isOpen={isCartOpen} onClose={onCloseCart} />
    </div>
  );
};

export default ProductsPage;

