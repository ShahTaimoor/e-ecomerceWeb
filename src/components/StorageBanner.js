import React, { useState } from 'react';

const StorageBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    { 
      id: 0, 
      image: '/images/banners/banner1.jpg',
      price: 'From Only £299.95',
      title: 'Ottoman Divan Sets',
      description: 'Explore British-made Ottoman Divan Beds with hidden storage, supportive comfort & — all in one stylish package.',
      button: 'SHOP DIVAN BEDS'
    },
    { 
      id: 1, 
      image: '/images/banners/banner2.jpg',
      price: 'From Only £299.95',
      title: 'Ottoman Divan Sets',
      description: 'Explore British-made Ottoman Divan Beds with hidden storage, supportive comfort & — all in one stylish package.',
      button: 'SHOP DIVAN BEDS'
    },
    { 
      id: 2, 
      image: '/images/banners/banner3.jpg',
      price: 'From Only £299.95',
      title: 'Ottoman Divan Sets',
      description: 'Explore British-made Ottoman Divan Beds with hidden storage, supportive comfort & — all in one stylish package.',
      button: 'SHOP DIVAN BEDS'
    }
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="relative max-w-7xl mx-auto">
          {/* Slide Container */}
          <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
            {/* Current Slide Image */}
            <div className="relative h-[400px] lg:h-[450px] overflow-hidden">
              <img 
                src={slides[activeSlide].image} 
                alt={slides[activeSlide].title} 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-center justify-center">
                <div className="container mx-auto px-8 w-full">
                  <div className="max-w-md mx-auto space-y-6 text-center">
                    {/* Price */}
                    <p className="text-gray-200 text-sm font-medium">
                      {slides[activeSlide].price}
                    </p>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                      {slides[activeSlide].title}
                    </h2>

                    {/* Description */}
                    <p className="text-white text-base md:text-lg">
                      {slides[activeSlide].description}
                    </p>

                    {/* CTA Button */}
                    <button className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                      {slides[activeSlide].button}
                    </button>

                    {/* Navigation Dots */}
                    <div className="flex gap-2 pt-4 justify-center">
                      {slides.map((slide, index) => (
                        <button
                          key={slide.id}
                          onClick={() => setActiveSlide(index)}
                          className={`h-2 rounded-full transition-all ${
                            activeSlide === index
                              ? 'bg-white w-8'
                              : 'bg-white/50 w-2'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageBanner;

