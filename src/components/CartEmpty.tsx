import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const EmptyTitle = tw.h1`
text-2xl text-black dark:text-gray-400
`;

export default function CartEmpty() {
  return (
    <div>
      <EmptyTitle>장바구니에 물품이 없습니다.</EmptyTitle>
      <Link to="/">
        <button className="btn-primary mt-10">담으러 가기</button>
      </Link>
    </div>
  );
}
