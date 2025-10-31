import React from 'react';

const Collections = () => {
  const collections = [
    {
      id: 1,
      image: '/images/collections/collection1.jpg',
      title: 'Ottoman Divan Sets'
    },
    {
      id: 2,
      image: '/images/collections/collection2.jpg',
      title: 'Ottoman Bed Frames'
    },
    {
      id: 3,
      image: '/images/collections/collection3.jpg',
      title: 'Mattresses'
    },
    {
      id: 4,
      image: '/images/collections/collection4.jpg',
      title: 'Headboards'
    },
    {
      id: 5,
      image: '/images/collections/collection5.jpg',
      title: 'Ottoman Storage Boxes'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center w-full">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Our Collections...
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mb-4 overflow-hidden rounded-full border-4 border-gray-200 group-hover:border-yellow-400 transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:scale-105">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm md:text-base font-medium text-gray-700 group-hover:text-yellow-500 transition-colors">
                {collection.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;

