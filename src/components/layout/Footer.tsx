import React from 'react';
import Image from 'next/image';
import { ourProduct, resources, aboutRentcar, contactInfo, socialLinks } from '@/data/home';
import logowhite from '../../../public/images/home/logowhite.png';
import LinkColumn from '../common/LinkColumn';

const Footer = () => {
    return (
        <footer className='bg-[#051C34] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Phần trên - Responsive Multi-column Grid */}
                <div className='grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-y-10 gap-x-6 border-b border-gray-700 pb-10'>
                    {/* Cột 1: Logo và Thông tin liên hệ (Chiếm 2 cột trên Mobile, 4 cột trên LG) */}
                    <div className='col-span-2 lg:col-span-4 space-y-6'>
                        <div className='flex items-center space-x-2'>
                            <Image src={logowhite} alt="Rentcar Logo" width={24} height={25.72} className="h-6 w-auto" />
                            {/* Lược bỏ: font-poppins, leading-normal */}
                            <span className='font-semibold text-base'>RENTCARS</span>
                        </div>
                        <div className='space-y-6'>
                            {contactInfo.map((item) => (
                                <div key={item.id} className='flex items-start gap-3'> {/* Đổi space-x-3 thành gap-3 */}
                                    <item.Icon className='h-5 w-5 text-gray-400 mt-0.5'/>
                                    {/* Lược bỏ: font-poppins, tracking-normal nếu Poppins là font mặc định */}
                                    <p className='text-gray-400 text-sm'>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                
                    {/* Wrapper cho các cột còn lại: 3 LinkColumn + Follow Us, responsive 2x2 trên mobile và md */}
                    <div className='col-span-2 md:col-span-4 lg:col-span-8'>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 h-full'>
                            <div>
                                <LinkColumn data={ourProduct} />
                            </div>
                            <div>
                                <LinkColumn data={resources} />
                            </div>
                            {/* Cột 3: aboutRentcar */}
                            <div>
                                <LinkColumn data={aboutRentcar} />
                            </div>
                            {/* Cột 4: Follow Us */}
                            <div className='flex flex-col space-y-4'>
                                {/* Lược bỏ: font-poppins, leading-normal */}
                                <h3 className='text-white font-medium text-base mb-2'>Follow Us</h3>
                                <div className='flex space-x-4'>
                                {socialLinks.map((item, index) =>(
                                    <a key={index} href={item.href} className='text-gray-400 hover:text-white transition-colors'>
                                        <item.Icon className='w-6 h-6'/> {/* Đảm bảo icon có kích thước cụ thể */}
                                    </a>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                {/* Phần dưới: Copyright */}
                <div className="mt-5 text-center md:text-left">
                    {/* Lược bỏ: font-poppins, leading-normal, tracking-normal */}
                    <p className="font-normal text-[15px] text-[#D6D6D6]">
                        Copyright 2023 • Rentcars, All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;