"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { placesData } from '@/data/placesData'

const PopularDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Xác định số items hiển thị dựa trên kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setItemsPerPage(2) // Mobile: 2 items (2 dòng 1 cột)
      } else if (width < 768) {
        setItemsPerPage(2) // Tablet nhỏ: 2 items
      } else if (width < 1024) {
        setItemsPerPage(3) // Tablet lớn: 3 items
      } else {
        setItemsPerPage(4) // Desktop: 4 items
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Scroll mượt mà khi currentIndex thay đổi
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const itemWidth = container.scrollWidth / placesData.length
      container.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < placesData.length - itemsPerPage) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  // Kiểm tra có thể prev/next không
  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < placesData.length - itemsPerPage

  const visiblePlaces = placesData.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className='w-full bg-white py-12 px-4 sm:py-16 md:py-20 lg:py-[62px]'>
      <div className='max-w-[1120px] mx-auto'>
        <div className='text-center mb-8 sm:mb-12 md:mb-16'>
          <p className='bg-[#DBEAFE] rounded-xl font-roboto font-bold mb-4 sm:mb-6 leading-[22px] tracking-normal text-xs sm:text-sm inline-block px-6 sm:px-8 py-3 sm:py-4 text-[#1572D3]'>
            ĐỊA ĐIỂM NỔI BẬT 
          </p>
          <h2 className='font-semibold text-2xl sm:text-[28px] sm:leading-[34px] md:text-[32px] md:leading-[38px] lg:text-[38px] leading-tight text-gray-900 px-4'>
            Địa điểm nổi tiếng với dịch vụ thuê xe rộng rãi
          </h2>
        </div>

        {/* Slider Container with Navigation Buttons */}
        <div className='relative px-8 sm:px-12 md:px-0'>
          {/* Previous Button */}
          <button 
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`absolute left-0 sm:-left-2 md:-left-4 lg:-left-2 top-[35%] sm:top-[40%] md:top-[45%] -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all border border-gray-200 ${
              canGoPrev 
                ? 'hover:bg-gray-100 cursor-pointer opacity-100' 
                : 'opacity-50 cursor-not-allowed'
            }`}
            aria-label="Previous"
          >
            <ChevronLeft className='w-5 h-5 md:w-6 md:h-6 text-gray-700' />
          </button>

          {/* Destinations Grid */}
          <div 
            ref={scrollContainerRef}
            className='overflow-hidden'
          >
            <div className='flex flex-wrap sm:flex-nowrap justify-center items-start gap-4 md:gap-6 lg:gap-8'>
              {
                visiblePlaces.map((place) => (
                  <div 
                    key={place.id} 
                    className='w-[calc(50%-8px)] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] lg:w-[246px] shrink-0 transition-all duration-500 ease-in-out'
                  >
                    <div className='relative'>
                      <Image 
                        src={place.image} 
                        alt={place.name} 
                        className='w-full h-[200px] sm:h-[280px] md:h-80 lg:h-[338px] rounded-xl mb-2.5 object-cover' 
                        width={246}
                        height={338}
                      />
                    </div>
                    <div>
                      <h4 className='font-medium text-base sm:text-lg md:text-xl leading-6 sm:leading-7 font-roboto text-gray-900'>
                        {place.name}
                      </h4>
                      <span className='font-normal text-sm leading-[22px] tracking-normal text-gray-500'>
                        {place.numberOfCars}+ xe
                      </span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            disabled={!canGoNext}
            className={`absolute right-0 sm:-right-2 md:-right-4 lg:-right-2 top-[35%] sm:top-[45%] md:top-[45%] -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all border border-gray-200 ${
              canGoNext 
                ? 'hover:bg-gray-100 cursor-pointer opacity-100' 
                : 'opacity-50 cursor-not-allowed'
            }`}
            aria-label="Next"
          >
            <ChevronRight className='w-5 h-5 md:w-6 md:h-6 text-gray-700' />
          </button>
        </div>

      </div>
    </section>
  )
}

export default PopularDestinations