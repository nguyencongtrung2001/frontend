import filedone from '../../public/images/icon/benefit/filedone.png';
import messages from '../../public/images/icon/benefit/messages.png';
import support from '../../public/images/icon/benefit/support.png';
import usertick from '../../public/images/icon/benefit/usertick.png';
import wallet from '../../public/images/icon/benefit/wallet.png';

export const BENEFIT_CAR = [
  {
    id: 1,
    icons: wallet,
    alts: 'wallet icon',
    title: 'Thanh toán dễ dàng',
    content: 'Đa dạng hình thức thanh toán: ATM, thẻ Visa & Ví điện tử (Momo, VnPay, ZaloPay).'
  },
  {
    id: 2,
    icons: usertick,
    alts: 'user tick icon',
    title: 'Tài xế có kinh nghiệm',
    content: 'Không có tài xế? Đừng lo, chúng tôi có nhiều tài xế giàu kinh nghiệm sẵn sàng phục vụ bạn.'
  },
  {
    id: 3,
    icons: support,
    alts: 'support icon', // Added missing alts
    title: 'Giao xe 24/7',
    content: 'Đặt xe bất cứ lúc nào và chúng tôi sẽ giao xe đến tận nơi cho bạn.'
  },
  {
    id: 4,
    icons: filedone,
    alts: 'filedone icon', // Added missing alts
    title: 'Thủ tục đơn giản',
    content: 'Chỉ cần có CCCD gắn chip (Hoặc Passport) & Giấy phép lái xe là bạn đã đủ điều kiện thuê xe.'
  },
  {
    id: 5, // Fixed: Changed from duplicate 2 to 5
    icons: messages,
    alts: 'messages icon', // Added missing alts
    title: 'Hỗ trợ kỹ thuật 24/7',
    content: 'Có thắc mắc? Hãy liên hệ với LOGO bất cứ lúc nào khi bạn cần hỗ trợ.'
  }
];