import React from 'react'
import phone from '../../../public/images/home/phone.png'
import phone2 from '../../../public/images/home/phone2.png'
import star2 from '../../../public/images/home/star2.png'
import Image from 'next/image'
import appStore from '../../../public/images/home/app-store.png';
import googlePlay from '../../../public/images/home/google-play.png';

const MobileAppSection = () => {
  return (
    <section className='w-full relative px-4 lg:px-0 overflow-hidden lg:h-[600px] mt-[50px] lg:py-0 '>
      {/* Star image - hidden on mobile */}
      <Image 
        src={star2} 
        alt='ngoi sao 2'  
        width={684} 
        className='absolute hidden lg:block -left-5 top-0 w-[684px] h-auto object-contain z-0'  
      />
      
      {/* Main content container - vertical on mobile (text top, phone bottom), horizontal on desktop */}
      <div className='relative w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16 z-10 lg:h-[500px] lg:mt-30'>
        {/* Text Content - Top on mobile (order-1), left on desktop (order-1) */}
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left max-w-[485px] w-full gap-4 lg:gap-5 order-1 lg:order-1'>
          <button className='w-40 sm:w-44 h-[50px] sm:h-[54px] px-4 sm:px-8 py-3 sm:py-4 rounded-lg bg-[#1572D3]/10 whitespace-nowrap'>
            <span className='font-medium text-xs sm:text-sm leading-[18px] sm:leading-[22px] tracking-normal text-[#1572D3]'>
              TẢI XUỐNG NGAY
            </span>
          </button>
          
          <h2 className='font-medium text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-[63px] text-[#282828]'>
            Tải xuống <span className='font-medium text-[#0050B3]'>LOGO</span> ứng
            dụng đặt xe <span className='font-medium text-[#0050B3]'>MIỄN PHÍ</span>
          </h2>

          <p className='font-normal text-sm sm:text-base leading-5 sm:leading-6 whitespace-nowrap text-[#3E3E3E] max-w-md'>
            Để đặt xe nhanh chóng, dễ dàng hơn và nhận ưu đãi độc quyền.
          </p>

          <div className='flex gap-3 sm:gap-4 w-full sm:w-max mt-4 sm:mt-6 justify-center lg:justify-start'>
            <Image 
              src={googlePlay} 
              alt="Google Play" 
              width={140} 
              height={42} 
              className="cursor-pointer rounded-[10px] w-32 sm:w-44 shrink-0" 
            />
            <Image 
              src={appStore} 
              alt="App Store" 
              width={140} 
              height={42} 
              className="cursor-pointer rounded-[10px] w-32 sm:w-44 shrink-0" 
            />
          </div>
        </div>

        {/* Phone Images - Bottom on mobile (order-2), right on desktop (order-2) */}
        <div className='relative w-full lg:w-[520px] h-auto order-2 lg:order-2 flex justify-center lg:mt-110'>
          <div className='relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none overflow-hidden h-[300px] sm:h-[400px] lg:h-auto'>
            {/* Phone frame (viền ngoài) */}
            <Image 
              src={phone} 
              alt='Phone frame' 
              width={520}
              height={1054}
              className='w-full h-auto relative z-10' 
            />
            
            {/* Phone screen (màn hình bên trong) - đè lên phone */}
            <div className='absolute w-[260px] top-[18px] sm:top-[23px] left-5 sm:left-[23px] z-20  sm:w-[90%] lg:w-full max-w-[380px] sm:max-w-[470px]'>
              <Image 
                src={phone2} 
                alt='Phone screen' 
                width={470} 
                height={1011}
                className='w-full h-auto rounded-2xl' 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppSection