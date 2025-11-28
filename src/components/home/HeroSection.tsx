import React from 'react';
import Header from '@/components/layout/Header';
import SearchBox from '@/components/home/SearchBox';
import HeroContent from '@/components/home/HeroContent';
import FloatingActionButton from '../common/FloatingActionButton';
import Image from 'next/image';
import logo2 from '../../../public/images/home/logo2.png'
const HeroSection = () => {
  return (
    <section className='w-full min-h-screen lg:h-[870px] relative overflow-hidden '>
      
      <Image src={logo2} alt='logo2' className='absolute w-[800px] h-[850px] -top-2.5] left-[866px]  z-0'/>
      {/* Header */}
      <div className='relative z-30 py-4 lg:py-10'>
        <Header />
      </div>
      
      {/* Hero Content */}
      <HeroContent />
      
      {/* Search Box - Đè lên hình ảnh xe trên desktop */}
      <div className='relative lg:absolute lg:bottom-21 lg:left-1/2 lg:-translate-x-1/2 z-30 mt-12 lg:mt-0 pb-12 lg:pb-0'>
        <SearchBox />
      </div>
      
     
    </section>
  );
};

export default HeroSection;