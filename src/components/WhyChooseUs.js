import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/promotionimage.jpg" 
          alt="Promotional background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Why Choose Ottoman Bed Store?
          </h2>

          {/* Description */}
          <div className="text-left text-white text-sm md:text-base mb-8 space-y-4 leading-relaxed">
            <p>
              At Ottoman Bed Store, we don't just sell beds—we help you reclaim your bedroom. Our <strong>British-made ottoman beds</strong> combine hidden storage with contemporary comfort, giving you more space, better sleep, and <strong>elegant style</strong> that lasts.
            </p>
            <p>
              Whether you're looking to maximise floor space in a small room or upgrade your sleep setup, our <strong>space-saving storage beds</strong> are designed to transform your home. With fast delivery, expert craftsmanship, and exceptional customer care, we make it easy to create a bedroom you'll love.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-white text-black font-bold py-4 px-12 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-lg uppercase">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Extra 20% OFF Badge */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20">
        <div className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg shadow-lg animate-pulse">
          Extra 20% OFF 🔥
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

