import imguser from '../../public/images/home/user.png'
import { StaticImageData } from 'next/image';

// Định nghĩa kiểu dữ liệu cho một đánh giá
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: StaticImageData;
}

// Dữ liệu đánh giá của khách hàng
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tiana Rogrinha",
    location: "Malaysia",
    rating: 5,
    quote: "Tôi cảm thấy rất yên tâm khi sử dụng dịch vụ của LOGO. Đội ngũ chăm sóc khách hàng rất nhiệt tình và tài xế luôn đúng giờ.",
    avatar: imguser,
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    location: "Hà Nội, Việt Nam",
    rating: 5,
    quote: "Dịch vụ thuê xe tuyệt vời, giá cả phải chăng và quy trình đặt xe rất nhanh chóng, tiện lợi. Rất khuyến khích!",
    avatar: imguser,
  },
  {
    id: 3,
    name: "Chris Evans",
    location: "New York, USA",
    rating: 5,
    quote: "The rental process was seamless and the car was in excellent condition. A truly 5-star experience!",
    avatar: imguser,
  },
  {
    id: 4,
    name: "Trần Thị B",
    location: "TP. Hồ Chí Minh",
    rating: 5,
    quote: "Hỗ trợ khách hàng chu đáo và chuyên nghiệp. Tôi sẽ tiếp tục sử dụng dịch vụ này cho những chuyến đi sắp tới.",
    avatar: imguser,
  },
];

export default testimonials;