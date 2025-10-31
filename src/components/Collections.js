import React from 'react';
import { useDispatch } from 'react-redux';
import { useCategories } from '../hooks/useCategories';
import { setSelectedCategory } from '../store/categorySlice';

const Collections = ({ onNavClick }) => {
  const dispatch = useDispatch();
  const { data: categories = [], isLoading, isError } = useCategories();

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
    if (onNavClick) {
      onNavClick(category.slug || category.id);
    }
  };

  if (isLoading) {
    return (
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-20">
            <div className="text-lg text-gray-600">Loading categories...</div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-20">
            <div className="text-lg text-red-600">Error loading categories. Please try again.</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-900">
            Our Collections...
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleCategoryClick(category)}
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mb-3 sm:mb-4 overflow-hidden rounded-full border-4 border-gray-200 group-hover:border-yellow-400 transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:scale-105">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-700 group-hover:text-yellow-500 transition-colors px-2">
                {category.name}
              </p>
              {category.productCount && (
                <p className="text-xs text-gray-500 mt-1">
                  {category.productCount} {category.productCount === 1 ? 'product' : 'products'}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;

