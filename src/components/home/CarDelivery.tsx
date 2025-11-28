"use client"
import React, { useRef } from 'react'
import { LOCAL_PLACE } from '@/data/placesdelivery'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CarDelivery = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -170, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 170, behavior: 'smooth' })
    }
  }

  return (
    <section className='w-full bg-white  px-4'>
      <div className='max-w-[1120px] mx-auto relative'>
        
        {/* Previous Button */}
        <button 
          onClick={scrollLeft}
          className='hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200 sm:-left-6'
          aria-label="Previous"
        >
          <ChevronLeft className='w-6 h-6 text-gray-700' />
        </button>

        {/* Main Content */}
        <div className='bg-[#FFF7ED] rounded-[50px] flex flex-col gap-6 px-[23.5px] py-[36.5px]'>
          
          {/* Tiêu đề chính */}
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='font-medium text-[30px] leading-10 text-center text-gray-800 '>
              Giao xe tại sân bay
            </h1>
         
            <span className='font-normal text-base leading-6 text-center text-[#6B7280] '>
              Nhận xe ngay sau khi xuống máy bay mà không phải gián đoạn hành trình
            </span>
          </div>

          {/* Danh sách địa điểm - Slider */}
          <div 
            ref={scrollRef}
            className='w-full flex justify-around overflow-x-auto scrollbar-hide gap-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
          >
            {
              LOCAL_PLACE.map((local) => (
                <div 
                  key={local.id} 
                  className='flex flex-col text-center gap-4 w-[153.5px] h-[183px] shrink-0 snap-center'
                >
                  <div className='relative'>
                    <Image 
                      src={local.image} 
                      alt={local.name}
                      className='w-full h-[139px] rounded-2xl object-cover'
                    />
                  </div>
                  {/* Tên địa điểm */}
                  <h3 className='font-medium text-base leading-6 text-center text-gray-900'>
                    {local.name}
                  </h3>
                </div> 
              ))
            }
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={scrollRight}
          className='hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200 sm:-right-6'
          aria-label="Next"
        >
          <ChevronRight className='w-6 h-6 text-gray-700' />
        </button>
      </div>
    </section>
  )
}

export default CarDelivery