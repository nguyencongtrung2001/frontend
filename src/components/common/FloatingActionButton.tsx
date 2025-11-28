'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import zalo from '../../../public/images/icon/floatbutton/zalo.png';
import facebook from '../../../public/images/icon/floatbutton/facebook.png';
import messages from '../../../public/images/icon/floatbutton/messages.png';
import threemess from '../../../public/images/icon/floatbutton/threemess.png';
import multi from '../../../public/images/icon/floatbutton/multi.png';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const contactItems = [
    { name: 'Zalo', icon: zalo, url: 'https://zalo.me/your_zalo_id' }, 
    { name: 'Messenger', icon: messages, url: 'https://m.me/your_facebook_page' }, 
    { name: 'Facebook', icon: facebook, url: 'https://www.facebook.com/your_facebook_page' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Contact Items - Responsive sizes, stacked vertically */}
      {isOpen && (
        <div className='absolute bottom-20 right-0 flex flex-col gap-2 sm:gap-3 lg:gap-4 animate-fadeIn z-40'>
          {contactItems.map((item, index) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300'
              style={{
                animation: `slideUp 0.3s ease-out ${index * 0.1}s both`
              }}
            >
              <Image 
                src={item.icon} 
                alt={item.name} 
                width={24} 
                height={24}
                className='object-contain w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8'
              />
            </a>
          ))}
        </div>
      )}

      {/* Main Button - Responsive size */}
      <button
        onClick={toggleMenu}
        className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#1572D3] shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 relative z-50'
      >
        {/* Icon threemess - Hiển thị khi chưa mở */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
        }`}>
          <Image 
            src={threemess} 
            alt="Contact" 
            width={24} 
            height={24}
            className='object-contain w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7'
          />
        </div>

        {/* Icon multi - Hiển thị khi đã mở */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
        }`}>
          <Image 
            src={multi} 
            alt="Close" 
            width={24} 
            height={24}
            className='object-contain w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7'
          />
        </div>
      </button>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingActionButton;