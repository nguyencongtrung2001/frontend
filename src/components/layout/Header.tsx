"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import logo from '../../../public/images/home/logo.png'
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = [
    { href: '#host', label: 'Trở thành chủ xe' },
    { href: '#how-to-rent', label: 'Cách thuê xe' },
    { href: '#about', label: 'Về chúng tôi' },
  ];
  
  const buttonStyle = 'h-14 py-4 px-8 rounded-lg font-roboto font-medium text-base leading-6';

  return (
    <header className='w-full px-4 lg:px-0 lg:w-[1120px] mx-auto'>
      <div className='flex items-center justify-between h-14'>
        {/* Logo Section */}
        <div className='flex items-center gap-2'>
          <Image src={logo} alt="logo" className='w-6 h-[25.72px]'/>
          <span className='text-[#1572D3] uppercase font-poppins font-semibold text-base leading-normal tracking-normal'>
            LOGO
          </span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className='lg:hidden text-[#484848] p-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10 h-full">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-[#484848] hover:text-blue-600 transition-colors font-roboto font-medium text-base leading-6 tracking-normal"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-2 h-full"> 
          <Button 
            variant="ghost" 
            className={`${buttonStyle} hover:bg-gray-100`}
          >
            <h5><a href="#" className='text-[#484848] font-roboto font-medium text-base leading-6 tracking-normal'>
              Đăng ký
            </a></h5>
          </Button>
          
          <Button 
            className={`${buttonStyle} bg-[#096DD9] hover:bg-blue-700 py-4 px-8 rounded-xl`}
          >
            <a href="#" className='text-[#FFFFFF] font-roboto font-medium text-base leading-6 tracking-normal'>
              Đăng nhập
            </a>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-50 py-4 border-t'>
          <nav className="flex flex-col gap-2 px-4">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-[#484848] hover:text-blue-600 py-3 font-roboto font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <Button 
                variant="outline" 
                className='h-12 w-full border-[#096DD9] text-[#096DD9] hover:bg-blue-50'
              >
                Đăng ký
              </Button>
              
              <Button 
                className='h-12 w-full bg-[#096DD9] hover:bg-blue-700 text-white'
              >
                Đăng nhập
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;