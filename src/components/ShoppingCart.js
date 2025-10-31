import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

const ShoppingCart = ({ isOpen, onClose, onCheckout }) => {
  const dispatch = useDispatch();
  const { items, total, itemCount } = useSelector((state) => state.cart);
  const [discountCode, setDiscountCode] = useState('');

  const handleCheckoutClick = () => {
    console.log('Checkout clicked', { items: items.length, onCheckout: !!onCheckout });
    if (items.length > 0) {
      if (onCheckout) {
        onCheckout();
      }
      if (onClose) {
        onClose();
      }
    }
  };

  const handleQuantityChange = (index, delta) => {
    const currentItem = items[index];
    if (currentItem) {
      const newQuantity = Math.max(1, currentItem.quantity + delta);
      dispatch(updateQuantity({ index, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (index) => {
    dispatch(removeFromCart(index));
  };

  const handleApplyDiscount = () => {
    // Handle discount code logic
    console.log('Discount code:', discountCode);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Cart Modal */}
      <div className="relative w-full sm:max-w-md h-full bg-white shadow-2xl overflow-hidden flex flex-col">
        {/* Header - Fixed */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b flex-shrink-0">
          <h2 className="text-xl sm:text-2xl font-bold text-black">Your Shopping Basket</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <svg className="w-24 h-24 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Start adding items to your cart</p>
              <button
                onClick={onClose}
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-lg transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={index} className="p-4 sm:p-6 border-b">
                <div className="flex gap-3 sm:gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="font-bold text-sm sm:text-base text-black line-clamp-2">{item.name}</h3>
                      <button 
                        onClick={() => handleRemoveItem(index)}
                        className="text-gray-500 hover:text-gray-700 flex-shrink-0 ml-2"
                        aria-label="Remove item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Specifications */}
                    {item.selectedHeadboard && (
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Headboard: {item.selectedHeadboard}</p>
                    )}
                    {item.selectedSize && (
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Size: {item.selectedSize}</p>
                    )}
                    {item.selectedStorage && (
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Storage: {item.selectedStorage}</p>
                    )}
                    {item.selectedFabric && (
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">
                        <strong>Fabric</strong>: <span className="inline-block w-4 h-4 rounded border border-gray-300 align-middle mr-1" style={{ backgroundColor: item.selectedFabric }}></span> Selected
                      </p>
                    )}

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between gap-2 mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(index, -1)}
                          className="w-8 h-8 bg-gray-300 hover:bg-gray-400 text-black rounded flex items-center justify-center transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-12 h-8 text-center border-2 border-gray-300 rounded flex items-center justify-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(index, 1)}
                          className="w-8 h-8 bg-gray-300 hover:bg-gray-400 text-black rounded flex items-center justify-center transition-colors"
                          aria-label="Increase quantity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-bold text-base sm:text-lg text-black">
                        £{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

        {/* Delivery Instructions */}
        <div className="p-6 border-b">
          <a href="#delivery" className="text-gray-600 underline text-sm">
            Click to enter any delivery instructions:
          </a>
        </div>

        {/* Discount Code */}
        <div className="p-6 border-b">
          <div className="flex gap-2">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Discount code"
              className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500"
            />
            <button
              onClick={handleApplyDiscount}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-lg transition-colors"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="p-6 border-b space-y-3">
          <div className="flex justify-between">
            <span className="text-black">Delivery</span>
            <span className="text-gray-600">FREE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black font-bold">Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
            <span className="text-black font-bold text-xl">£{total.toFixed(2)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 sm:p-6 space-y-4 flex-shrink-0">
          <button 
            type="button"
            disabled={items.length === 0}
            onClick={handleCheckoutClick}
            className={`w-full font-bold py-3 sm:py-4 rounded-lg transition-colors uppercase text-base sm:text-lg ${
              items.length === 0 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700 cursor-pointer'
            } text-white`}
          >
            CHECKOUT NOW
          </button>
          <button 
            onClick={onClose}
            className="block w-full text-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            Continue shopping &gt;
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

