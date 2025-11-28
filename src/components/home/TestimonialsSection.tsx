"use client";
import React, { useState } from 'react';
import testimonials, { Testimonial } from '@/data/commentData';
import Image from 'next/image';
import left from '../../../public/images/home/left.png';
import right from '../../../public/images/home/right.png';
import ballon from '../../../public/images/home/ballon.jpg';
import bgtest from '../../../public/images/home/bgtest.png';
import { Star } from 'lucide-react';

// Star Rating Component
interface StarRatingProps {
  rating: number; 
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <Star 
          key={index}
          className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${
            index < rating 
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300 fill-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const totalSlides = testimonials?.length || 0; 

  if (totalSlides === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        Không có đánh giá nào để hiển thị.
      </div>
    );
  }

  const currentTestimonial: Testimonial = testimonials[currentIndex];

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <section className='w-full bg-white py-12 sm:py-16  px-4'>
      <div className='max-w-[1200px] mx-auto'>
        
        {/* Header Section */}
        <div className="text-center mb-12 ">
          <div className='inline-block bg-[#DBEAFE] rounded-xl px-6 sm:px-8 py-3 sm:py-4 mb-6'>
            <p className='font-bold text-xs sm:text-sm leading-[22px] text-[#1572D3]'>
              ĐÁNH GIÁ CỦA KHÁCH HÀNG
            </p>
          </div>
          
          <h2 className="font-medium text-2xl sm:text-3xl lg:text-[38px] leading-tight lg:leading-[46px] text-[#333333] max-w-3xl mx-auto">
            Đánh giá chân thực của khách hàng dành cho dịch vụ của chúng tôi
          </h2>
        </div>

        {/* Testimonial Card with Background */}
        <div className="relative w-full bg-gray-100 lg:h-[723px]">
          
          {/* Rating Section - Top */}
          <div className="flex flex-col items-center justify-center gap-4 py-8  px-4">
            <div className="flex items-baseline gap-2">
              <p className="font-poppins font-medium text-5xl sm:text-6xl lg:text-7xl leading-none text-gray-900">
                5.0
              </p>
              <span className="text-lg sm:text-xl font-normal text-gray-600">stars</span>
            </div>
            <StarRating rating={5} />
          </div>

          {/* Background Image Container - Adjusted to align with avatar */}
          <div className='relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]'>
            <Image 
              src={bgtest} 
              alt='background testimonial' 
              fill
              className='object-cover object-bottom'  
              priority
            />
            
            {/* Content Overlay - Start from top to align avatar with background top */}
            <div className='absolute inset-0 flex flex-col items-center justify-start px-4 sm:px-8 lg:px-16 pt-4 sm:pt-6 lg:pt-8'>  {/* Changed to justify-start and added pt for fine-tuning */}
              
              {/* Avatar - Now at top of background */}
              <div className="mb-6 lg:mb-8">
                <Image 
                  src={currentTestimonial.avatar} 
                  alt={`Avatar của ${currentTestimonial.name}`} 
                  width={113}
                  height={113}
                  className="w-20 h-20 sm:w-28 sm:h-28 lg:w-[113px] lg:h-[113px] rounded-full object-cover "
                />
              </div>

              {/* Quote Content */}
              <div className="relative flex items-start justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 lg:mb-8 max-w-[900px] w-full">
                
                {/* Left Quote Icon */}
                <div className="shrink-0 pt-1">
                  <Image 
                    src={left} 
                    alt='quote left' 
                    width={51} 
                    height={44}
                    className="w-6 h-5 sm:w-10 sm:h-8 lg:w-[51px] lg:h-11 opacity-60"
                  />
                </div>
                
                {/* Quote Text */}
                <p className="font-normal text-base sm:text-lg lg:text-[22px] xl:text-[24px] leading-6 sm:leading-7 lg:leading-8 text-[#111827] text-center flex-1 px-2">
                  {currentTestimonial.quote}
                </p>

                {/* Right Quote Icon */}
                <div className="shrink-0 pt-1">
                  <Image 
                    src={right} 
                    alt='quote right' 
                    width={51} 
                    height={44}
                    className="w-6 h-5 sm:w-10 sm:h-8 lg:w-[51px] lg:h-11 opacity-60"
                  />
                </div>
              </div>

              {/* Name and Location */}
              <div className='mb-6 lg:mb-8'>
                <p className="font-medium text-lg sm:text-xl lg:text-2xl leading-7 lg:leading-8 text-center text-gray-800">
                  {currentTestimonial.name}
                </p>
                <p className="font-normal text-sm sm:text-base leading-6 text-center text-gray-500 flex items-center justify-center gap-2 mt-2">
                  <span className="inline-block w-4 h-4">
                    <Image 
                      src={ballon} 
                      alt='location icon' 
                      width={16} 
                      height={16} 
                      className="object-contain"
                    />
                  </span>
                  {currentTestimonial.location}
                </p>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-gray-900 w-8 sm:w-10' 
                        : 'bg-gray-400 w-2'
                    } hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;