import React from 'react';

const FeaturedBlogs = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/images/banners/banner1.jpg',
      title: 'Bedroom Style Trends 2025: Design Inspiration for Real Homes',
      description: 'From Morris wallpapers to the most searched-for paint colours in the UK, this guide unpacks how to style your bedroom in 2025. With 50+ bed fabrics and made-to-measure storage, we...'
    },
    {
      id: 2,
      image: '/images/banners/banner2.jpg',
      title: '10 Reasons to Buy an Ottoman Bed',
      description: 'Need a bed that stores more and sleeps better? You\'re in the right place. Ottoman beds lift up smoothly to reveal full under-bed storage - ideal for smaller UK bedrooms....'
    },
    {
      id: 3,
      image: '/images/banners/banner3.jpg',
      title: 'What\'s Your Bed Style?',
      description: 'What\'s your sleep style? Whether you\'re a minimalist, a maximalist, or somewhere in between, the right bed doesn\'t just match your room—it matches you. Find your bedroom persona and discover...'
    },
    {
      id: 4,
      image: '/images/collections/collection1.jpg',
      title: 'How to Choose the Right Ottoman Bed for Your Bedroom',
      description: 'Not sure which ottoman bed is right for your space? This guide covers bed sizes, storage types, lift mechanisms, and fabric choices—helping you buy with confidence.'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured blogs...</h2>
          <a href="#view-all" className="text-yellow-500 hover:text-yellow-600 font-medium text-lg">
            View all
          </a>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900 line-clamp-2 hover:text-yellow-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;

