"use client"
import React, { useState } from 'react' // Import useState
import { MoveRight } from 'lucide-react';
import Card from '../common/Card'

import { CARD_DATA } from '@/data/cardData'; 



const ListCard = () => {


    return (
        <section className='w-full bg-white  px-4 py-10 '>
            {/* Content Container - Căn giữa */}
            <div className='max-w-[1120px] mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <p className='bg-[#DBEAFE] rounded-xl font-bold mb-6 leading-[22px] text-sm inline-block px-8 py-4 text-[#1572D3]'>
                        GÓI THUÊ XE ĐƯỢC ƯA CHUỘNG
                    </p>
                    <h2 className='font-medium text-[38px] leading-[46px] text-[#333333] text-center sm:text-[28px] sm:leading-[34px] md:text-[32px] md:leading-[38px] lg:text-[38px] lg:leading-[46px]'>
                        Các gói thuê xe với ưu đãi hấp dẫn
                    </h2>
                </div>
                
                {/* Cards Grid - Đảm bảo mobile (mặc định) là 1 cột */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center'> 
                    {
                        CARD_DATA.map((card) => ( // Sử dụng cardsToShow đã được cắt
                            <Card  
                                key={card.id} 
                                imageSrc={card.image[0]} 
                                discount={card.discount || ''} 
                                title={`${card.brand} ${card.model}`} 
                                seats={`${card.passengers} chỗ`} 
                                transmission={card.transmission}
                                fuel={card.fuelType} 
                                location={card.location}
                                rating={card.rating.toString()} 
                                priceOld={card.discount ? `${Math.round(card.pricePerDay * (1 + (parseInt(card.discount) / 100 || 0)))}đ`.replace(/\B(?=(\d{3})+(?!\d))/g, '.') : ''} 
                                priceNew={`${card.pricePerDay.toLocaleString('vi-VN')}đ`} 
                            />
                        ))
                    }
                </div>
                
    
                <div className='flex justify-center mt-13'>
                    <button 
                        className='w-full sm:w-[244px] h-12 bg-white rounded-lg ring-0.5 border border-[#E0E0E0] p-2 flex gap-2 items-center justify-center whitespace-nowrap text-[#4E4E4E]'>
                        <span>Xem thêm phương tiện khác</span>
                        <MoveRight className='w-5 h-5'/>
                        </button>
                </div>
            </div>
        </section>
    )
}

export default ListCard