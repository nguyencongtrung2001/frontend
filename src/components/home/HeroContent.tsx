import React from 'react';
import Image from 'next/image';

// Import các hình ảnh từ thư mục public
import appStore from '../../../public/images/home/app-store.png';
import googlePlay from '../../../public/images/home/google-play.png';
import line from '../../../public/images/home/line.png';
import frame from '../../../public/images/home/logo2.png';
import porcher from '../../../public/images/home/porcher.png';

const HeroContent = () => {
  return (
    <div className='relative z-20 w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-0 items-center max-w-[1600px] mx-auto'>
        
        {/* Left Content - Dịch lên trên và qua phải */}
        <div className='flex flex-col text-center lg:text-left items-center lg:items-start order-2 lg:order-1 lg:pl-50 lg:-mt-33 px-4 lg:gap-1'>
          <h1 className="text-3xl md:text-4xl lg:text-[48px] leading-[46px]  font-medium text-gray-900 ">
            Tìm, đặt và
            <br />
            thuê xe một cách
            <br />
            <span className='inline-flex flex-col text-[#1572D3] w-max mt-0 '>
              Dễ dàng
              <Image 
                src={line} 
                alt="line decoration" 
                className='self-end -mt-0.5  mr-2 ' 
                width={130} 
                height={10} 
              />
            </span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-600 max-w-md mt-4  font-medium lg:text-[16px]">
            Đặt xe ở <span className="text-[#0050B3] ">bất cứ đâu, bất cứ khi nào</span> chỉ với thiết bị iOS hoặc Android của bạn!
          </p>
          
          {/* App Store Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto'>
            <Image 
              src={appStore} 
              alt="Download on App Store" 
              width={130} 
              height={40} 
              className="cursor-pointer hover:opacity-80 transition-opacity mx-auto sm:mx-0" 
            />
            <Image 
              src={googlePlay} 
              alt="Get it on Google Play" 
              width={130} 
              height={40} 
              className="cursor-pointer hover:opacity-80 transition-opacity mx-auto sm:mx-0" 
            />
          </div>
        </div>
        
        {/* Right Content - Car Image sát bên phải và giữ kích thước lớn */}
        <div className='relative flex justify-center lg:justify-end items-center order-1 lg:order-2 min-h-[300px] lg:min-h-[500px] lg:pr-0 lg:mt-15'>
          {/* Car Image - Giữ kích thước gốc */}
          <div className='relative z-10 w-full lg:w-[850px]'>
            <Image 
              src={porcher}
              alt='Porsche car'
              width={1048}   
              height={537}  
              priority 
              className='object-contain drop-shadow-2xl w-full h-auto'
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeroContent;