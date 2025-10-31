import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Very pleased with my new bed, had a call to ask if what they had on the order was correct, I changed the delivery date and it was no trouble for them to change it. Delivery was prompt and with in the time slot and two nice friendly polite guys delivered it in room of choice. Bed put together easy and holds loads of stuff so over all very pleased would recommend.",
      name: "Katie Wong",
      location: "Glenrothes",
      rating: 5
    },
    {
      id: 2,
      text: "Excellent quality and service! The bed is exactly as described and the storage space is amazing. Customer service was very helpful throughout the process.",
      name: "John Smith",
      location: "Manchester",
      rating: 5
    },
    {
      id: 3,
      text: "Love my new ottoman bed! It's stylish, comfortable, and the hidden storage is perfect for my small bedroom. Delivery team were professional and efficient.",
      name: "Sarah Johnson",
      location: "London",
      rating: 5
    },
    {
      id: 4,
      text: "High quality furniture at a great price. The bed frame is sturdy and the lift mechanism works smoothly. Highly recommend this store!",
      name: "Michael Brown",
      location: "Birmingham",
      rating: 5
    },
    {
      id: 5,
      text: "Fantastic experience from start to finish. Great product, fast delivery, and excellent customer support. Couldn't be happier!",
      name: "Emma Davis",
      location: "Leeds",
      rating: 5
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why our customers trust us.
          </h2>

          {/* Swiper */}
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="text-center px-8 py-4">
                  {/* Quote */}
                  <div className="text-6xl text-gray-300 leading-none mb-4">"</div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 px-4">
                    {testimonial.text}
                  </p>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-6 h-6 text-black" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>

                  {/* Customer Info */}
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          position: relative;
          margin-top: 3rem;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          border: 2px solid #e5e7eb;
          opacity: 1;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #000;
          border-color: #000;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;

