import React from 'react';
import { Star, Heart } from 'lucide-react';
import Image from 'next/image';
import user from '../../../public/images/icon/card/user.png';
import engine from '../../../public/images/icon/card/engine.png';
import local from '../../../public/images/icon/card/local.png';
import gas from '../../../public/images/icon/card/gas.png';

// Interface cho props (TypeScript - để type-safe)
interface CardProps {
  imageSrc: string;
  discount: string;
  title: string;
  seats: string;
  transmission: string;
  fuel: string;
  location: string;
  rating: string;
  priceOld: string;
  priceNew: string;
}

// Hàm format giá: 12323000 -> 12323K
const formatPrice = (priceString: string): string => {
  // Loại bỏ tất cả ký tự không phải số
  const numberOnly = priceString.replace(/\D/g, '');
  
  if (!numberOnly) return priceString;
  
  const price = parseInt(numberOnly);
  
  // Nếu giá chia hết cho 1000, chuyển thành K
  if (price >= 1000 && price % 1000 === 0) {
    return `${price / 1000}K`;
  }
  
  // Nếu không, giữ nguyên format
  return priceString;
};

// Destructure trực tiếp từ props thành các "tham số đầu vào" riêng lẻ
const Card: React.FC<CardProps> = ({
  imageSrc,
  discount,
  title,
  seats,
  transmission,
  fuel,
  location,
  rating,
  priceOld,
  priceNew,
}) => {
  return (
    <div className="w-[256px] bg-white rounded-xl overflow-hidden shadow-lg font-sans">
      
      {/* 1. Header (Image & Overlay Content) */}
      <div className="relative">
        {/* Image - Sử dụng Next Image với width/height */}
        <Image
          src={imageSrc}  
          alt="Card Image"
          width={256}
          height={219}
          className="object-cover rounded-t-xl"
        />

        {/* Overlay Content (Discount & Heart) */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center">
          {/* Discount Tag */}
          <div className="bg-red-700 text-red-50 px-3 py-1 rounded-full font-roboto font-normal text-xs leading-5 tracking-normal text-center">
            {discount}  
          </div>
          
          {/* Heart Icon (Favorite) */}
          <div className="bg-black/35 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer transition-colors hover:bg-black/70">
            <Heart className="w-5 h-5 text-gray-200" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* 2. Body Content */}
      <div className="px-4 py-3">
        
        {/* Title */}
        <div className="font-roboto font-semibold text-xl leading-7 mb-3">
          {title} 
        </div>

        {/* Data Grid (3 Columns) */}
        <div className="grid grid-cols-3 gap-x-1 gap-y-1 text-slate-500 text-xs">
          
          {/* Item 1: Seats */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <Image src={user} alt="Seats icon" width={16} height={16} className="w-3.5 h-3.5 text-[#98A2B3]" />
            <span className='font-roboto font-normal text-xs leading-5 tracking-normal'>{seats}</span>  
          </div>

          {/* Item 2: Transmission */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <Image src={engine} alt="Transmission icon" width={16} height={16}  className="w-3.5 h-3.5 text-[#98A2B3]" />
            <span className='font-roboto font-normal text-xs leading-5 tracking-normal'>{transmission}</span>  
          </div>

          {/* Item 3: Fuel */}
          <div className="flex items-center gap-1.5 whitespace-nowrap ml-5">
            <Image src={gas} alt="Fuel icon" width={16} height={16}  className="w-3.5 h-3.5 text-[#98A2B3]" />
            <span className='font-roboto font-normal text-xs leading-5 tracking-normal'>{fuel}</span>  
          </div>

          {/* Location (Full Row Span) */}
          <div className="col-span-3 flex items-center gap-1.5 mt-1 text-slate-500">
            <Image src={local} alt="Location icon" width={16} height={16}  className="w-3.5 h-3.5 text-[#98A2B3]" />
            <span className='font-roboto font-normal text-xs leading-5 tracking-normal'>{location}</span>  
          </div>
        </div>

        {/* Divider and Footer */}
        <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between items-center">
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>  
          </div>

          {/* Price */}
          <div className="flex items-center gap-1.5">
            {/* Old Price - Format với K */}
            {priceOld && (
              <span className="font-roboto font-normal text-xs leading-5 tracking-normal align-bottom line-through text-[#98A2B3]">
                {formatPrice(priceOld)}
              </span>
            )}
            {/* New Price */}
            <span className="font-roboto font-medium text-xl leading-7 tracking-normal align-bottom text-[#0050B3]">
              {priceNew}  
            </span>
            {/* Unit */}
            <span className="font-roboto font-normal text-sm leading-[22px] tracking-normal align-bottom text-[#9C9C9C]">
              /ngày
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;