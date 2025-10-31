import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';

const SuccessPage = ({ onClose, redirectTo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear cart after successful checkout
    dispatch(clearCart());

    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      if (redirectTo) {
        redirectTo();
      } else {
        // Default: redirect to home
        window.location.href = '/';
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch, redirectTo]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been confirmed and you will receive an email confirmation shortly.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600 mb-2">Order Number:</p>
          <p className="text-lg font-bold text-gray-900">#{Math.floor(Math.random() * 1000000)}</p>
        </div>

        {/* Redirect Message */}
        <p className="text-sm text-gray-500 mb-4">
          Redirecting you back in 3 seconds...
        </p>

        {/* Manual Redirect Button */}
        <button
          onClick={() => {
            if (redirectTo) {
              redirectTo();
            } else {
              window.location.href = '/';
            }
          }}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;

