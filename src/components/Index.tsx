import Slider from './Slider';
import digitalImg from '../assets/images/digital.jpg';
import shopImg from '../assets/images/shop.jpeg';
import jeanImg from '../assets/images/jeans.jpeg';

const Index = () => {
  return (
    <Slider
      images={[
        {
          url: digitalImg,
          title: 'QLED 모니터 입고!',
          description: '다양한 전자기기를 확인해보세요',
          category: 'digital',
        },
        {
          url: shopImg,
          title: '연인과의 기념일이 다가온다면',
          description: '특별한 악세서리가 준비되어있습니다',
          category: 'accessory',
        },
        {
          url: jeanImg,
          title: '변화가 필요하다면',
          description: '패션에 변화를 줘보는건 어떨까요?',
          category: 'fashion',
        },
      ]}
    />
  );
};
export default Index;
