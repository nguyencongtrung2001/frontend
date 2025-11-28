import acura from '../../public/images/home/brandlogo/acura.png';
import audi from '../../public/images/home/brandlogo/audi.png';
import honda from '../../public/images/home/brandlogo/honda.png';
import volvo from '../../public/images/home/brandlogo/volvo.png';
import nissan from '../../public/images/home/brandlogo/nissan.png';
import jaguar from '../../public/images/home/brandlogo/jaguar.png';

import banner1 from '../../public/images/home/retalstep/banner1.png'
import banner2 from '../../public/images/home/retalstep/banner2.png'
import banner3 from '../../public/images/home/retalstep/banner3.png'
import banner4 from '../../public/images/home/retalstep/banner4.png'


// src/data/rentstepData.tsx
export const RENTAL_STEPS = [
    {
        id: 1,
        image: banner1,  // Dùng string path
        text_number: '01',
        title: 'Đặt xe trên web',
        content: 'Chọn vị trí, tìm kiếm và lựa chọn chiếc xe lý tưởng của bạn'
    },
    {
        id: 2,
        image: banner2,
        text_number: '02',
        title: 'Nhận xe',
        content: 'Tới địa điểm đã chọn và tiến hành nhận xe'
    },
    {
        id: 3,
        image: banner3,
        text_number: '03',
        title: 'Bắt đầu hành trình',
        content: 'Tận hưởng hành trình của bạn với dịch vụ tốt nhất'
    },
    {
        id: 4,
        image: banner4,
        text_number: '04',
        title: 'Trả xe & Kết thúc',
        content: 'Hoàn thành chuyến đi, trả xe và chia sẻ trải nghiệm của bạn'
    },
]

export const BRAND_LOGOS = [
    { id: 1, image: honda, alt: 'Honda Logo' },
    { id: 2, image: audi, alt: 'Audi Logo' },
    { id: 3, image: volvo, alt: 'Volvo Logo' },
    { id: 4, image: nissan, alt: 'Nissan Logo' },
    { id: 5, image: jaguar, alt: 'Jaguar Logo' },
    { id: 6, image: acura, alt: 'Actura Logo' },
]