import React from 'react';

const Header = ({ onCartClick, onNavClick, activeCategory }) => {
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
        <div className="container mx-auto px-4 py-6">
          {/* Top Row - Logo, Search, Cart */}
          <div className="flex items-center justify-between mb-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-black border-2 border-yellow-400 flex items-center justify-center">
                <span className="text-3xl font-bold text-yellow-400">
                  <span className="text-4xl">O</span>BS
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                <button className="px-4 py-3 bg-gray-200 hover:bg-gray-300 text-sm font-semibold flex items-center">
                  All <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Search for c"
                  className="flex-1 px-4 py-3 bg-transparent border-none outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Cart Icon */}
            <div className="flex-shrink-0 cursor-pointer hover:opacity-75" onClick={onCartClick}>
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center items-center space-x-6 text-sm font-medium">
            <button 
              onClick={() => onNavClick('divan')} 
              className={`${activeCategory === 'divan' ? 'border-b-2 border-black pb-1 font-bold' : 'hover:text-yellow-500'} transition-colors`}
            >
              Ottoman Divan Sets
            </button>
            <button 
              onClick={() => onNavClick('bedframes')} 
              className={`${activeCategory === 'bedframes' ? 'border-b-2 border-black pb-1 font-bold' : 'hover:text-yellow-500'} transition-colors`}
            >
              Ottoman Bed Frames
            </button>
            <button 
              onClick={() => onNavClick('mattresses')} 
              className={`${activeCategory === 'mattresses' ? 'border-b-2 border-black pb-1 font-bold' : 'hover:text-yellow-500'} transition-colors`}
            >
              Mattresses
            </button>
            <button 
              onClick={() => onNavClick('headboards')} 
              className={`${activeCategory === 'headboards' ? 'border-b-2 border-black pb-1 font-bold' : 'hover:text-yellow-500'} transition-colors`}
            >
              Headboards
            </button>
            <button 
              onClick={() => onNavClick('storage')} 
              className={`${activeCategory === 'storage' ? 'border-b-2 border-black pb-1 font-bold' : 'hover:text-yellow-500'} transition-colors`}
            >
              Ottoman Storage Boxes
            </button>
            <button 
              onClick={() => onNavClick('recycling')} 
              className={`${activeCategory === 'recycling' ? 'border-b-2 border-black pb-1 font-bold' : 'hover:text-yellow-500'} transition-colors`}
            >
              Mattress Recycling
            </button>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact Us</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

