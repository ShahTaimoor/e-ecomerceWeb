import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCategories } from '../hooks/useCategories';
import { useSearchProducts } from '../hooks/useProducts';
import { setSearchQuery, clearSearch } from '../store/searchSlice';
import { setSelectedCategory } from '../store/categorySlice';

const Header = ({ onCartClick, onNavClick, activeCategory, onProductClick, onSearchResults, onGoHome }) => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.cart);
  const { searchQuery } = useSelector((state) => state.search);
  const { data: categories = [], isLoading: categoriesLoading } = useCategories();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showMobileSearchModal, setShowMobileSearchModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const categoryDropdownRef = useRef(null);
  
  const { data: searchResults = [], isLoading: isSearching } = useSearchProducts(
    searchTerm.length > 2 ? searchTerm : ''
  );

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside search area (including category dropdown)
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
      
      // Check if click is outside category dropdown button and dropdown menu
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setShowCategoryDropdown(false);
      }
      
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) {
        // Don't close mobile search modal on outside click, user should explicitly close it
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile search modal or menu is open
  useEffect(() => {
    if (showMobileSearchModal || showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMobileSearchModal, showMobileMenu]);

  // Update search query in Redux
  useEffect(() => {
    if (searchTerm.length > 2) {
      dispatch(setSearchQuery(searchTerm));
      setShowSearchDropdown(true);
    } else {
      dispatch(clearSearch());
      setShowSearchDropdown(false);
    }
  }, [searchTerm, dispatch]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 2 && searchResults.length > 0) {
      // Navigate to first result or show search results page
      if (onSearchResults && searchResults.length > 0) {
        onSearchResults(searchResults);
      }
      setShowSearchDropdown(false);
    }
  };

  const handleProductSelect = (product) => {
    if (onProductClick) {
      onProductClick(product);
    }
    setSearchTerm('');
    dispatch(clearSearch());
    setShowSearchDropdown(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategoryFilter(category);
    setShowCategoryDropdown(false);
    if (onNavClick && category !== 'all') {
      const categoryMap = {
        'ottoman-divan-sets': 'divan',
        'ottoman-bed-frames': 'bedframes',
        'mattresses': 'mattresses',
        'headboards': 'headboards',
        'ottoman-storage-boxes': 'storage',
        'mattress-recycling': 'recycling',
      };
      onNavClick(categoryMap[category] || category);
    }
  };
  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-2 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            Lowest Prices Guaranteed - <span className="underline cursor-pointer hover:text-yellow-400">Shop Now</span>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md fixed top-[32px] left-0 right-0 z-40">
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 md:py-6">
          {/* Top Row - Logo, Search, Cart */}
          <div className="flex items-center justify-between mb-4">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => {
              onGoHome && onGoHome();
              setShowMobileMenu(false);
            }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-black border-2 border-yellow-400 flex items-center justify-center hover:opacity-90 transition-opacity">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">
                  <span className="text-2xl sm:text-3xl md:text-4xl">O</span>BS
                </span>
              </div>
            </div>

            {/* Search Bar - Center (Desktop Only) */}
            <div className="hidden sm:flex flex-1 justify-center items-center relative" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="flex items-center w-full max-w-2xl bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                {/* Category Filter Dropdown */}
                <div className="relative" ref={categoryDropdownRef}>
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCategoryDropdown(!showCategoryDropdown);
                      setShowSearchDropdown(false);
                    }}
                    className="px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 hover:bg-gray-200 text-sm font-medium flex items-center whitespace-nowrap border-r border-gray-300"
                  >
                    {selectedCategoryFilter === 'all' ? 'All' : categories.find(c => c.id === selectedCategoryFilter)?.name || 'All'}
                    <svg className="w-4 h-4 ml-1.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {showCategoryDropdown && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-300 rounded-lg shadow-xl z-[60] max-h-80 overflow-y-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {categoriesLoading ? (
                        <div className="p-4 text-center text-gray-500 text-sm">Loading categories...</div>
                      ) : categories.length > 0 ? (
                        <>
                          <button
                            type="button"
                            onClick={() => handleCategorySelect('all')}
                            className={`w-full px-4 py-2.5 text-left hover:bg-gray-100 text-sm font-medium border-b border-gray-100 ${selectedCategoryFilter === 'all' ? 'bg-gray-50' : ''}`}
                          >
                            All Categories
                          </button>
                          {categories.map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => handleCategorySelect(cat.id)}
                              className={`w-full px-4 py-2.5 text-left hover:bg-gray-100 text-sm flex items-center justify-between gap-2 border-b border-gray-100 last:border-b-0 ${selectedCategoryFilter === cat.id ? 'bg-gray-50' : ''}`}
                            >
                              <span className="font-medium">{cat.name}</span>
                              <span className="text-xs text-gray-500">({cat.productCount})</span>
                            </button>
                          ))}
                        </>
                      ) : (
                        <div className="p-4 text-center text-gray-500 text-sm">No categories available</div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Search Input */}
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowCategoryDropdown(false);
                  }}
                  onFocus={() => {
                    if (searchTerm.length > 2) {
                      setShowSearchDropdown(true);
                    }
                  }}
                  placeholder="Search for products"
                  className="flex-1 px-4 py-2.5 sm:py-3 bg-transparent border-none outline-none text-gray-700 text-sm sm:text-base placeholder-gray-400"
                />
              </form>

              {/* Search Results Dropdown */}
              {showSearchDropdown && searchTerm.length > 2 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                  {isSearching ? (
                    <div className="p-4 text-center text-gray-600">Searching...</div>
                  ) : searchResults.length > 0 ? (
                    <>
                      <div className="p-2 border-b border-gray-200">
                        <p className="text-xs font-semibold text-gray-600">
                          Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
                        </p>
                      </div>
                      {searchResults.slice(0, 5).map((product) => (
                        <button
                          key={product.id}
                          type="button"
                          onClick={() => handleProductSelect(product)}
                          className="w-full p-3 hover:bg-gray-100 flex items-center gap-3 text-left border-b border-gray-100"
                        >
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</p>
                            <p className="text-xs text-gray-500">{product.category}</p>
                            <p className="text-sm font-bold text-red-600">£{product.price.toFixed(2)}</p>
                          </div>
                        </button>
                      ))}
                      {searchResults.length > 5 && (
                        <div className="p-2 text-center">
                          <button
                            type="button"
                            onClick={() => {
                              if (onSearchResults) {
                                onSearchResults(searchResults);
                              }
                              setShowSearchDropdown(false);
                            }}
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                          >
                            View all {searchResults.length} results
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-4 text-center text-gray-600">
                      No products found for "{searchTerm}"
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Side Icons - Mobile: Menu, Search, Cart / Desktop: Cart Only */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              {/* Mobile Menu Icon */}
              <div 
                className="flex-shrink-0 sm:hidden cursor-pointer hover:opacity-75"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>

              {/* Mobile Search Icon */}
              <div 
                className="flex-shrink-0 sm:hidden relative cursor-pointer hover:opacity-75"
                onClick={() => setShowMobileSearchModal(true)}
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Cart Icon - Right Side */}
              <div className="flex-shrink-0 relative cursor-pointer hover:opacity-75" onClick={onCartClick}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-600 text-white text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden sm:flex flex-wrap justify-center items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 text-[10px] xs:text-xs sm:text-sm font-medium px-1">
            {categories.map((category) => {
              const categoryMap = {
                'ottoman-divan-sets': 'divan',
                'ottoman-bed-frames': 'bedframes',
                'mattresses': 'mattresses',
                'headboards': 'headboards',
                'ottoman-storage-boxes': 'storage',
                'mattress-recycling': 'recycling',
              };
              const mappedCategory = categoryMap[category.id] || category.id;
              return (
                <button 
                  key={category.id}
                  onClick={() => {
                    dispatch(setSelectedCategory(category));
                    onNavClick && onNavClick(mappedCategory);
                  }} 
                  className={`px-1 sm:px-2 ${activeCategory === mappedCategory ? 'border-b-2 border-black pb-1 font-bold' : 'hover:text-yellow-500'} transition-colors whitespace-nowrap`}
                >
                  {category.name}
                </button>
              );
            })}
            <a href="#contact" className="px-1 sm:px-2 hover:text-yellow-500 transition-colors whitespace-nowrap">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Modal */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 backdrop-blur-sm sm:hidden">
          <div className="w-full bg-white shadow-xl flex flex-col max-h-screen">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-black">Menu</h2>
              <button
                onClick={() => setShowMobileMenu(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto">
              <div className="py-2">
                {categories.map((category) => {
                  const categoryMap = {
                    'ottoman-divan-sets': 'divan',
                    'ottoman-bed-frames': 'bedframes',
                    'mattresses': 'mattresses',
                    'headboards': 'headboards',
                    'ottoman-storage-boxes': 'storage',
                    'mattress-recycling': 'recycling',
                  };
                  const mappedCategory = categoryMap[category.id] || category.id;
                  return (
                    <button 
                      key={category.id}
                      onClick={() => {
                        dispatch(setSelectedCategory(category));
                        onNavClick && onNavClick(mappedCategory);
                        setShowMobileMenu(false);
                      }} 
                      className={`w-full text-left px-4 py-3 border-b border-gray-100 ${activeCategory === mappedCategory ? 'bg-yellow-50 font-bold text-black' : 'hover:bg-gray-50'} transition-colors text-sm`}
                    >
                      {category.name}
                    </button>
                  );
                })}
                <a 
                  href="#contact" 
                  onClick={() => setShowMobileMenu(false)}
                  className="block w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Search Modal */}
      {showMobileSearchModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 backdrop-blur-sm sm:hidden">
          <div ref={mobileSearchRef} className="w-full bg-white shadow-xl flex flex-col max-h-screen">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-black">Search Products</h2>
              <button
                onClick={() => {
                  setShowMobileSearchModal(false);
                  setSearchTerm('');
                  dispatch(clearSearch());
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 border-b">
              <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowCategoryDropdown(false);
                  }}
                  placeholder="Search for products"
                  className="flex-1 px-4 py-3 bg-transparent border-none outline-none text-gray-700 text-base"
                  autoFocus
                />
                <button 
                  type="submit"
                  className="px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Search Results */}
            <div className="flex-1 overflow-y-auto">
              {isSearching ? (
                <div className="p-4 text-center text-gray-600">Searching...</div>
              ) : searchTerm.length > 2 && searchResults.length > 0 ? (
                <>
                  <div className="p-3 border-b border-gray-200 bg-gray-50">
                    <p className="text-sm font-semibold text-gray-600">
                      Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
                    </p>
                  </div>
                  {searchResults.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => {
                        handleProductSelect(product);
                        setShowMobileSearchModal(false);
                      }}
                      className="w-full p-4 hover:bg-gray-100 flex items-center gap-3 text-left border-b border-gray-100"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                        <p className="text-base font-bold text-red-600 mt-1">£{product.price.toFixed(2)}</p>
                      </div>
                    </button>
                  ))}
                </>
              ) : searchTerm.length > 2 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-600 mb-2">No products found for "{searchTerm}"</p>
                  <p className="text-sm text-gray-500">Try a different search term</p>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-gray-600">Start typing to search for products</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

