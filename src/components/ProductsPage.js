import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useProducts } from '../hooks/useProducts';
import { useCategories } from '../hooks/useCategories';
import { addToCart } from '../store/cartSlice';
import Header from './Header';
import ShoppingCart from './ShoppingCart';
import Footer from './Footer';

const ProductsPage = ({ isOpen, onClose, category, onNavClick, onCartClick, activeCategory, isCartOpen, onCloseCart, onProductClick, onCheckout }) => {
  const dispatch = useDispatch();
  const { data: products = [], isLoading, isError } = useProducts(activeCategory || null);
  const { data: categories = [] } = useCategories();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    availability: 'all',
    priceRange: 'all',
    onSale: false,
  });
  const [sortBy, setSortBy] = useState('popular');
  const [expandedFilters, setExpandedFilters] = useState({});
  const filterRef = useRef(null);

  // Price ranges for filtering
  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: '0-200', label: '£0 - £200' },
    { id: '200-300', label: '£200 - £300' },
    { id: '300-400', label: '£300 - £400' },
    { id: '400+', label: '£400+' },
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by availability (onSale)
    if (selectedFilters.onSale) {
      filtered = filtered.filter(p => p.onSale);
    }

    // Filter by price range
    if (selectedFilters.priceRange !== 'all') {
      filtered = filtered.filter(product => {
        const price = product.price;
        switch (selectedFilters.priceRange) {
          case '0-200':
            return price <= 200;
          case '200-300':
            return price > 200 && price <= 300;
          case '300-400':
            return price > 300 && price <= 400;
          case '400+':
            return price > 400;
          default:
            return true;
        }
      });
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'popular':
        default:
          return b.onSale - a.onSale || (b.originalPrice - b.price) - (a.originalPrice - a.price);
      }
    });

    return filtered;
  }, [products, selectedFilters, sortBy]);
  
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
  
  const handleAddToCart = (product, event) => {
    event.stopPropagation(); // Prevent product click
    dispatch(addToCart({
      product,
      quantity: 1,
      options: {}
    }));
    onCartClick(); // Open cart after adding
  };

  const toggleFilterSection = (section) => {
    setExpandedFilters(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      availability: 'all',
      priceRange: 'all',
      onSale: false,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header 
        onCartClick={onCartClick} 
        onNavClick={onNavClick} 
        activeCategory={activeCategory}
        onProductClick={onProductClick}
        onGoHome={onClose}
      />

      {/* Main Content */}
      <div className="pt-[140px] sm:pt-[160px] md:pt-[186px] flex relative">
        {/* Filter Sidebar */}
        {isFilterOpen && (
          <>
            {/* Mobile Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsFilterOpen(false)}
            ></div>
            <div ref={filterRef} className="fixed md:sticky md:top-[176px] left-0 top-0 w-64 md:w-64 bg-white border-r border-gray-300 p-4 sm:p-6 flex-shrink-0 h-screen md:h-[calc(100vh-176px)] overflow-y-auto z-50 shadow-lg md:shadow-none">
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
              <button 
                onClick={() => toggleFilterSection('availability')}
                className="flex items-center justify-between w-full text-left mb-3"
              >
                <h4 className="font-semibold text-lg">Availability</h4>
                <svg 
                  className={`w-5 h-5 transition-transform ${expandedFilters.availability ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedFilters.availability && (
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.onSale}
                      onChange={(e) => handleFilterChange('onSale', e.target.checked)}
                      className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm">On Sale Only</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!selectedFilters.onSale}
                      onChange={(e) => handleFilterChange('onSale', !e.target.checked)}
                      className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm">All Products</span>
                  </label>
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="mb-6 border-b pb-4">
              <button 
                onClick={() => toggleFilterSection('price')}
                className="flex items-center justify-between w-full text-left mb-3"
              >
                <h4 className="font-semibold text-lg">Price Range</h4>
                <svg 
                  className={`w-5 h-5 transition-transform ${expandedFilters.price ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedFilters.price && (
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.id}
                        checked={selectedFilters.priceRange === range.id}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="w-4 h-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Category Filter */}
            <div className="mb-6 border-b pb-4">
              <button 
                onClick={() => toggleFilterSection('category')}
                className="flex items-center justify-between w-full text-left mb-3"
              >
                <h4 className="font-semibold text-lg">Categories</h4>
                <svg 
                  className={`w-5 h-5 transition-transform ${expandedFilters.category ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedFilters.category && (
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="categoryFilter"
                        value={category.id}
                        className="w-4 h-4 text-green-600 focus:ring-green-500"
                        onClick={() => {
                          const categoryMap = {
                            'ottoman-divan-sets': 'divan',
                            'ottoman-bed-frames': 'bedframes',
                            'mattresses': 'mattresses',
                            'headboards': 'headboards',
                            'ottoman-storage-boxes': 'storage',
                            'mattress-recycling': 'recycling',
                          };
                          onNavClick && onNavClick(categoryMap[category.id] || category.id);
                        }}
                      />
                      <span className="ml-2 text-sm">{category.name}</span>
                      <span className="ml-auto text-xs text-gray-500">({category.productCount})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearAllFilters}
              className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors text-sm"
            >
              Clear All Filters
            </button>
          </div>
          </>
        )}
        
        {/* Content Section */}
        <div className="flex-1">
          {/* Filter and Sort Section */}
          <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 border-b mt-10 sm:mt-0">
            <div className="flex justify-between items-center gap-2 sm:gap-4">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                data-filter-button
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm sm:text-base"
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
                <span className="text-gray-600 text-sm sm:text-base">Sort by</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:border-gray-400 text-sm sm:text-base"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-lg text-gray-600">Loading products...</div>
              </div>
            ) : isError ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-lg text-red-600">Error loading products. Please try again.</div>
              </div>
            ) : filteredAndSortedProducts.length === 0 ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <div className="text-lg text-gray-600 mb-2">No products found</div>
                  <button
                    onClick={clearAllFilters}
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Clear filters
                  </button>
                </div>
              </div>
            ) : (
              <div className="products-grid-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredAndSortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
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
                        <div className="absolute top-4 left-4 bg-red-600 text-white font-bold px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base">
                          Sale
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-gray-900 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 sm:gap-3 mb-4">
                        <span className="text-xl sm:text-2xl font-bold text-red-600">
                          From £{product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through text-base sm:text-lg">
                            £{product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition-colors text-sm sm:text-base"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Shopping Cart */}
      <ShoppingCart isOpen={isCartOpen} onClose={onCloseCart} onCheckout={onCheckout} />
    </div>
  );
};

export default ProductsPage;

