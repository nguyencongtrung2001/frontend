import React from 'react'
import { MapPin, Calendar, Search } from 'lucide-react'
// Giả định Button là một component Tailwind-friendly
// Bạn cần đảm bảo đã có component Button (từ shadcn/ui hoặc tương tự)
// import { Button } from '../ui/button'

const SearchBox = () => {
  return (
    <div className='flex flex-col items-center w-full px-4 md:px-8 lg:px-0'>
      
      {/* --- Tab Selector --- */}
      {/* Mobile: w-full co giãn | Desktop (lg): width cố định 417px */}
      <div 
        className='flex w-full max-w-full sm:max-w-md lg:w-[417px] rounded-t-[20px] overflow-hidden shadow-lg' 
        style={{ height: '48px' }}
      >
        {/* Các button chiếm 1/3 chiều rộng */}
        <button className='flex-1 font-roboto text-sm md:text-base font-medium text-center bg-[#F5F5F5] text-[#BFBFBF] rounded-tl-[20px] flex items-center justify-center transition-colors hover:bg-gray-200'>
          Xe liên tỉnh
        </button>
        <button className='flex-1 font-roboto text-sm md:text-base font-medium text-center bg-[#F5F5F5] text-[#BFBFBF] flex items-center justify-center transition-colors hover:bg-gray-200'>
          Xe du lịch
        </button>
        {/* Tab ĐANG CHỌN: Xe tự lái */}
        <button className='flex-1 font-roboto text-sm md:text-base font-medium text-center bg-[#0070F3] text-white rounded-tr-[20px] flex items-center justify-center transition-colors hover:bg-blue-700'>
          Xe tự lái
        </button>
      </div>
      
      {/* --- Search Bar --- */}
      {/* Mobile: flex-col, w-full | Desktop (lg): flex-row, width 1196px, height 90px, rounded 60px */}
      <div 
        // Đặt kích thước cố định cho desktop
        className='flex flex-col lg:flex-row items-stretch w-full max-w-full lg:w-[1196px] lg:h-[90px] bg-white lg:bg-gray-50 rounded-[20px] lg:rounded-[60px] shadow-xl p-4 lg:p-0'
      >
        
        {/* Địa điểm (Location) */}
        {/* Sử dụng icon size 28 cho desktop và 24 cho mobile */}
        <div className='flex items-center space-x-3 p-2 lg:px-8 flex-1 lg:flex-[0.6] border-b lg:border-b-0 lg:border-r border-gray-200 lg:h-full'> 
          {/* Icon cho Mobile */}
          <MapPin size={24} className="text-gray-400 min-w-6 lg:hidden" />
          {/* Icon cho Desktop */}
          <MapPin size={28} className="text-gray-300 min-w-7 hidden lg:block" />
          <div className='flex flex-col justify-center w-full lg:py-0'>
            <span className='font-roboto font-medium text-sm lg:text-xl text-gray-700 lg:text-[#8C8C8C]'>Địa điểm</span>
            <input 
              placeholder="Bạn muốn thuê xe ở đâu?"
              className="w-full font-roboto text-sm lg:text-base placeholder:text-gray-400 focus:outline-none bg-transparent mt-1"
            />
          </div>
        </div>
        
        {/* Thời gian thuê (Duration) */}
        {/* Sử dụng icon size 28 cho desktop và 24 cho mobile */}
        <div className='flex items-center space-x-3 p-2 lg:px-8 flex-1 lg:flex-[1.4] border-b lg:border-b-0 border-gray-200 lg:h-full'> 
          {/* Icon cho Mobile */}
          <Calendar size={24} className="text-gray-400 min-w-6 lg:hidden" />
          {/* Icon cho Desktop */}
          <Calendar size={28} className="text-gray-300 min-w-7 hidden lg:block" />
          <div className='flex flex-col justify-center w-full lg:py-0'>
            <span className='font-roboto font-medium text-sm lg:text-xl text-gray-700 lg:text-[#8C8C8C]'>Thời gian thuê</span>
            <input 
              placeholder="Thời gian bắt đầu - Thời gian kết thúc"
              className="w-full font-roboto text-sm lg:text-base placeholder:text-gray-400 focus:outline-none bg-transparent mt-1"
            />
          </div>
        </div>
        
        {/* Nút Tìm kiếm (Search Button) */}
        {/* Mobile: Full width, dưới cùng | Desktop: Nằm gọn bên phải, hình tròn 64x64px */}
        <div className='flex items-center justify-center lg:justify-end p-4 lg:p-4 lg:shrink-0'>
            <button 
              className="w-full h-12 lg:w-16 lg:h-16 rounded-lg lg:rounded-full bg-[#0070F3] hover:bg-blue-700 p-0 flex items-center justify-center transition-all shadow-md lg:mr-4" 
            >
              <Search size={24} className="text-white" />
              {/* Thêm chữ Tìm kiếm cho mobile/tablet */}
              <span className="lg:hidden ml-2 text-white font-medium">Tìm kiếm</span>
            </button>
        </div>
        
      </div>
    </div>
  )
}

export default SearchBox;