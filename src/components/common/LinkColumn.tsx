// src/components/layout/LinkColumn.tsx

import React from 'react';
// Import type từ file types/index.ts của bạn
import type { LinkColumnProps } from '../../types/index'; 

const LinkColumn = ({ data }: LinkColumnProps) => (
    <div className='flex flex-col space-y-4'>
        <h3 className='font-poppins font-medium text-base leading-normal text-[#FFFFFF] temb-2'>{data.title}</h3>
        <ul className='space-y-0'>
            {data.links.map((link, index) => (
                <li key={index}>
                    <a href="#" className='text-[#D6D6D6] font-poppins font-normal text-sm leading-normal '>
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default LinkColumn;