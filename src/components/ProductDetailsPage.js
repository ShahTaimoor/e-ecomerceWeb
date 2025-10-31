import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ShoppingCart from './ShoppingCart';

const ProductDetailsPage = ({ product, onClose, onCartClick, onNavClick, activeCategory, isCartOpen, onCloseCart, onProductClick }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedHeadboard, setSelectedHeadboard] = useState('26" Strutted (Included)');
  const [selectedSize, setSelectedSize] = useState('2\'6 Small Single');
  const [selectedStorage, setSelectedStorage] = useState('');
  const [selectedFabric, setSelectedFabric] = useState('');

  const recommendedProducts = [
    {
      id: 101,
      name: 'Chesterfield Ottoman Blanket Storage Box',
      image: '/images/collections/collection5.jpg',
      price: 169.95,
      originalPrice: 339.95,
      onSale: true
    },
    {
      id: 2,
      name: 'Classic Ottoman Divan Bed Set',
      image: '/images/banners/banner2.jpg',
      price: 299.95,
      originalPrice: 699.95,
      onSale: true
    },
    {
      id: 102,
      name: 'Old Divan Bed Collection/Recycle',
      image: '/images/collections/collection4.jpg',
      price: 99.95,
      originalPrice: 199.95,
      onSale: true
    },
    {
      id: 103,
      name: 'Chesterfield Traditional Upholstered Headboard',
      image: '/images/collections/collection3.jpg',
      price: 99.95,
      originalPrice: 199.95,
      onSale: true
    },
    {
      id: 104,
      name: 'Vitality Sensation 2000 Pocket Sprung Mattress',
      image: '/images/collections/collection1.jpg',
      price: 239.95,
      originalPrice: 479.95,
      onSale: true,
      comfortLevel: 'Medium Comfort'
    }
  ];

  const images = [
    product.image,
    '/images/banners/banner1.jpg',
    '/images/banners/banner2.jpg',
    '/images/banners/banner3.jpg',
    '/images/collections/collection1.jpg',
    '/images/collections/collection2.jpg',
    '/images/collections/collection3.jpg',
    '/images/collections/collection4.jpg',
    '/images/collections/collection5.jpg',
    '/images/banners/banner1.jpg'
  ];

  const fabrics = [
    '#4A5568', '#2D3748', '#1A202C', '#E53E3E', '#3182CE',
    '#38A169', '#805AD5', '#D69E2E', '#DD6B20', '#ED8936',
    '#F6AD55', '#FC8181', '#9F7AEA', '#68D391', '#4FD1C7',
    '#63B3ED', '#90CDF4', '#FBB6CE', '#FED7D7', '#C6F6D5',
    '#BEE3F8', '#D6BCFA', '#FBD38D', '#ED64A6', '#667EEA',
    '#764BA2', '#F093FB', '#F5576C', '#4FACFE', '#00F2FE',
    '#43E97B', '#38F9D7', '#FA709A', '#FEE140', '#30CFD0',
    '#330867', '#FC466B', '#3F5EFB', '#E0C3FC', '#8EC5FC'
  ];

  const handleAddToBasket = () => {
    // Handle add to basket logic
    console.log('Add to basket');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onCartClick={onCartClick} onNavClick={onNavClick} activeCategory={activeCategory} />

      {/* Main Content */}
      <div className="pt-[186px] pb-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-black">Home</span>
            {' > '}
            <span className="cursor-pointer hover:text-black">Ottoman Divan Sets</span>
            {' > '}
            <span className="text-black">{product.name}</span>
          </div>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left - Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative mb-4">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={images[selectedImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Image Navigation */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                  {selectedImage + 1}/{images.length}
                </div>
                {/* Next Arrow */}
                {selectedImage < images.length - 1 && (
                  <button 
                    onClick={() => setSelectedImage(selectedImage + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-7 gap-2">
                {images.slice(0, 7).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded border-2 transition-colors ${
                      selectedImage === index ? 'border-black' : 'border-gray-300'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Product Details */}
            <div>
              {/* Sale Badge */}
              {product.onSale && (
                <div className="mb-4">
                  <span className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-bold rounded">
                    Sale
                  </span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-red-600">
                    £{product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-2xl text-gray-500 line-through">
                      £{product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Headboard Height Dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-gray-700">Headboard Height</label>
                <select 
                  value={selectedHeadboard}
                  onChange={(e) => setSelectedHeadboard(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-gray-500"
                >
                  <option>26" Strutted (Included)</option>
                  <option>28" Strutted</option>
                  <option>30" Strutted</option>
                </select>
              </div>

              {/* Bed Size Dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-gray-700">Bed Size</label>
                <select 
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-gray-500"
                >
                  <option>2'6 Small Single</option>
                  <option>3'0 Single</option>
                  <option>4'0 Small Double</option>
                  <option>4'6 Double</option>
                  <option>5'0 King</option>
                  <option>6'0 Super King</option>
                </select>
              </div>

              {/* Storage Options */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Storage Options<span className="text-red-500 ml-1">*</span>
                </label>
                <select 
                  value={selectedStorage}
                  onChange={(e) => setSelectedStorage(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-gray-500"
                >
                  <option value="">Choose Storage Options</option>
                  <option>Ottoman Storage</option>
                  <option>Drawers</option>
                  <option>No Storage</option>
                </select>
              </div>

              {/* Fabric Choice */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-3 text-gray-700">
                  Fabric Choice<span className="text-red-500 ml-1">*</span>
                </label>
                <div className="grid grid-cols-10 gap-2">
                  {fabrics.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedFabric(color)}
                      className={`aspect-square rounded border-2 transition-colors ${
                        selectedFabric === color ? 'border-black scale-110' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Fabric color ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Add to Basket Button */}
              <button
                onClick={handleAddToBasket}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg mb-4 text-lg transition-colors"
              >
                ADD TO BASKET
              </button>

              {/* Delivery Information */}
              <div className="border-b border-gray-300 pb-4 mb-4">
                <details className="cursor-pointer">
                  <summary className="text-sm text-gray-700">
                    Free 2-Man Delivery in 3-10 Working Days
                  </summary>
                  <p className="mt-2 text-sm text-gray-600">
                    Our professional delivery team will bring your furniture safely to your chosen room.
                  </p>
                </details>
              </div>

              {/* Help Contact */}
              <div className="mb-4">
                <p className="text-sm text-gray-700">
                  Need help? Call us at <span className="font-semibold text-black">0345 512 0024</span>
                </p>
              </div>

              {/* Share Options */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-700">Share:</span>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Share on X">
                    <span className="font-bold text-xl">X</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Share on Facebook">
                    <span className="font-bold text-xl">F</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-600 transition-colors" aria-label="Share on Pinterest">
                    <span className="font-bold text-xl">P</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Sections */}
          <div className="space-y-4 mb-12">
            {/* Description */}
            <details className="border-b border-gray-300 pb-4">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 flex items-center justify-between">
                Description
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                {product.name} combines elegant design with practical storage. Features hidden ottoman storage, 
                premium quality materials, and British craftsmanship. Perfect for maximizing space in any bedroom.
              </p>
            </details>

            {/* Mattress Collection & Recycling */}
            <details className="border-b border-gray-300 pb-4">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 flex items-center justify-between">
                Mattress Collection & Recycling
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                We offer mattress collection and recycling services. Contact us for more information.
              </p>
            </details>

            {/* NBF Approved Products */}
            <details className="border-b border-gray-300 pb-4">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 flex items-center justify-between">
                NBF Approved Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                All our products are NBF approved, meeting the highest UK standards for quality and safety.
              </p>
            </details>
          </div>

          {/* You May Also Like Section */}
          <div className="mb-12 mt-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">You may also like...</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {recommendedProducts.map((recProduct) => (
                <div 
                  key={recProduct.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => onProductClick && onProductClick(recProduct)}
                >
                  {/* Product Image */}
                  <div className="relative">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={recProduct.image} 
                        alt={recProduct.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {/* Sale Badge */}
                    {recProduct.onSale && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white font-bold px-2 py-1 text-xs rounded">
                        Sale
                      </div>
                    )}
                    {/* Comfort Level Badge */}
                    {recProduct.comfortLevel && (
                      <div className="absolute top-2 right-2 bg-blue-800 text-white font-bold px-2 py-1 text-xs rounded">
                        {recProduct.comfortLevel}
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-3 text-gray-900 line-clamp-2 min-h-[40px]">
                      {recProduct.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-red-600">
                        From £{recProduct.price.toFixed(2)}
                      </span>
                      {recProduct.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          £{recProduct.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment & Security */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Payment & Security</h2>
            <p className="text-lg font-semibold mb-4 text-gray-700">Payment methods</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white px-4 py-2 rounded text-black font-bold text-xs">Google Pay</div>
              <div className="bg-white px-4 py-2 rounded text-black font-bold text-xs">Apple Pay</div>
              <div className="bg-white px-4 py-2 rounded text-black font-bold text-xs">Klarna</div>
              <div className="bg-white px-4 py-2 rounded text-black font-bold text-xs">Shop Pay</div>
              <div className="bg-white px-4 py-2 rounded text-black font-bold text-xs">Visa</div>
            </div>
            <p className="text-sm text-gray-700">
              Your payment information is processed 100% securely. We do not store card details nor have access to your card information.
            </p>
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

export default ProductDetailsPage;

