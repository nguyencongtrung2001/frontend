import React from 'react';
import Header from '@/components/layout/Header';
import SearchBox from '@/components/home/SearchBox';
import HeroContent from '@/components/home/HeroContent';
import Image from 'next/image';
import logo2 from '../../../public/images/home/logo2.png'

const HeroSection = () => {
  return (
    <section className='w-full min-h-screen lg:h-[870px] relative overflow-hidden'>
      
      {/* Background Logo - Fixed positioning for large screens */}
      <Image 
        src={logo2} 
        alt='logo2' 
        width={800}
        height={850}
        className='absolute w-[400px] h-[425px] lg:w-[800px] lg:h-[850px] -top-2 right-0 lg:left-[866px] z-0 opacity-50 lg:opacity-100'
      />
      
      {/* Header */}
      <div className='relative z-30 py-4 lg:py-10'>
        <Header />
      </div>
      
      {/* Hero Content */}
      <HeroContent />
      
      {/* Search Box - Positioned at bottom on desktop */}
      <div className='relative lg:absolute lg:bottom-20 lg:left-1/2 lg:-translate-x-1/2 z-30 mt-12 lg:mt-0 pb-12 lg:pb-0'>
        <SearchBox />
      </div>
      
    </section>
  );
};

export default HeroSection;