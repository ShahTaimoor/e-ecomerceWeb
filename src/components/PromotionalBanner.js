import React, { useState } from 'react';

const PromotionalBanner = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('SAVE20');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Sale Text */}
          <div className="text-yellow-400 font-bold text-xl lg:text-2xl">
            50% OFF AUTUMN SALE
          </div>

          {/* Additional Offer */}
          <div className="text-white text-sm lg:text-base">
            Plus get an EXTRA 20% Off Today!
          </div>

          {/* Discount Code and Button */}
          <div className="flex items-center gap-3">
            <button className="border-2 border-white text-white px-4 py-2 font-semibold hover:bg-white hover:text-black transition-colors">
              SAVE20
            </button>
            <button
              onClick={handleCopyCode}
              className="border-2 border-white text-white px-4 py-2 font-semibold hover:bg-white hover:text-black transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copied ? 'Copied!' : 'Copy code'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;

