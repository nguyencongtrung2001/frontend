import React from 'react';
import { BENEFIT_CAR } from '@/data/benefitcar'; // Adjust path if needed
import star from '../../../public/images/home/star.png';
import audi2 from '../../../public/images/home/audi2.png';
import Image from 'next/image';

const BenefitCar = () => {
  return (
    <section className='relative w-full overflow-hidden mt-10 bg-white flex flex-col lg:flex-row lg:h-[850px] px-4 lg:px-0'>
      <div className='relative w-full lg:w-[700px] lg:shrink-0 order-2 lg:order-1 overflow-hidden'> {/* Giảm container width để ảnh fit */}
        <Image 
          src={audi2} 
          alt='xe audi' 
          width={700}  
          height={330} 
          className='w-full h-auto lg:w-[700px] lg:h-[330px] lg:absolute lg:top-[248px] lg:z-20 object-cover '  // Thêm lg:w-[700px] lg:h-[300px] để kiểm soát kích thước
        />
        <Image 
          src={star} 
          alt='ngoi sao' 
          width={859} 
          height={1123} 
          className='absolute top-[200px] lg:-top-[67px] w-full h-[600px] lg:w-[859px] lg:h-[1123px]  lg:opacity-50 z-0 object-contain' 
        />
      </div>
    
      <div className='relative w-full lg:flex-1 order-1 lg:order-2 flex flex-col gap-8 lg:gap-14 lg:ml-[100px] '>
        
        {/* Phần 1: Tiêu đề và Nhãn */}
        <div className='flex flex-col gap-4 lg:gap-8 lg:w-xl'>
          <p className='bg-[#1572D31A] rounded-lg font-semibold uppercase text-xs lg:text-sm w-fit px-4 lg:px-8 py-2 lg:py-3 text-[#1572D3]'>
            TẠI SAO CHỌN CHÚNG TÔI?
          </p>
          
          <h2 className='font-semibold text-2xl lg:text-[38px] leading-tight lg:leading-[46px]'>
            <span className="font-extrabold text-[#0050B3]">LOGO</span>{' '}
            <span className="font-medium text-[#333333]">mang đến trải nghiệm tốt nhất với các gói thuê xe hấp dẫn</span>
          </h2>
        </div> 
        
        {/* Phần 2: Danh sách Lợi ích */}
        <div className='flex flex-col gap-6 lg:gap-10'> 
          {BENEFIT_CAR.map((benefit) => (
            <div key={benefit.id} className='flex flex-row items-center gap-3 lg:gap-4 w-full lg:w-[423px]'>
              
              {/* Icon Container */}
              <div className='shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#ECF5FF] rounded-2xl flex items-center justify-center '>
                  <Image 
                    src={benefit.icons} 
                    alt={benefit.alts} 
                    className='w-5 h-5 lg:w-6 lg:h-6' 
                    width={24} 
                    height={24}
                  />
              </div>
              
              {/* Nội dung lợi ích */}
              <div className='flex-1 space-y-1'>
                <h4 className='font-medium text-lg lg:text-xl leading-6 lg:leading-7'>
                  {benefit.title}
                </h4>
                <h5 className='font-normal text-sm lg:text-base leading-5 lg:leading-6 text-gray-600'>
                  {benefit.content}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitCar;