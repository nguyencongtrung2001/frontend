import React from 'react'
import { BRAND_LOGOS, RENTAL_STEPS } from '@/data/rentstep'
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image'

const RentalStep = () => {
  return (
    <section className='bg-white text-center w-full h-auto py-[30px]'>
        <div className='max-w-6xl mx-auto px-4'>
           <div className='text-center mb-8 sm:mb-12 md:mb-16'>
                <p className='bg-[#1572D31A] w-auto sm:w-[175px] h-auto sm:h-14 rounded-lg mb-4 sm:mb-6 uppercase font-medium text-sm sm:text-base leading-6 inline-block px-6 sm:px-8 py-3 sm:py-4 text-[#1572D3] opacity-100'>
                    CÁCH THUÊ XE                
                </p>
                <h2 className='font-medium text-2xl sm:text-[28px] sm:leading-[34px] md:text-[32px] md:leading-[38px] lg:text-[38px] lg:leading-[46px] text-center text-[#333333] px-4'>
                    Thuê xe dễ dàng chỉ với 4 bước 
                </h2>
            </div>
            
            {/* Grid - 2 cột trên mobile, 4 cột trên desktop */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[30px]'>
                {
                    RENTAL_STEPS.map((step) =>(
                        <div key={step.id} className='flex flex-col items-center text-center border-none'>
                            <div className='relative w-full h-[120px] sm:h-[140px] md:h-40 lg:h-[180px] mb-4 sm:mb-6 bg-white'>
                               <Image src={step.image} alt={step.title} fill className='object-contain' />
                            </div>
                            <CardContent className='p-2 sm:p-4 md:p-6'>
                                <div className='flex items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-3 flex-wrap'>
                                    <span className='text-[#1572D3] font-medium text-lg sm:text-xl leading-6 sm:leading-7'>
                                        {step.text_number}
                                    </span>
                                    <h3 className='font-medium text-base sm:text-lg md:text-xl leading-6 sm:leading-7 text-[#000000]'>
                                        {step.title}
                                    </h3>
                                </div>
                                {/* Description */}
                                <p className='text-[#6D6D6D] font-medium text-xs sm:text-sm leading-5 sm:leading-[22px] text-center px-1 sm:px-2'>
                                    {step.content}
                                </p> 
                            </CardContent>
                        </div>
                    ))
                }
           </div>
        </div>

        <footer className='w-full mt-8 sm:mt-[90px]'>
            <div className='w-full grid grid-cols-2 justify-items-center sm:flex sm:flex-row sm:justify-around items-center gap-4 sm:gap-0 px-4'>
                {
                    BRAND_LOGOS.map((brand) => (
                        <div key={brand.id} className='relative w-[100px] h-[60px] sm:w-20 sm:h-[60px] md:w-[120px] md:h-20 lg:w-[150px] lg:h-[66px] shrink-0'>
                             <Image src={brand.image} alt={brand.alt} fill className='object-contain'/>
                        </div>
                    ))
                }
            </div>
        </footer>
    </section>
  )
}
 
export default RentalStep