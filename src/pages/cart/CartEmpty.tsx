import { Link } from 'react-router-dom';
import { cartStyle } from '../../styles/cart/cartStyles';

export default function CartEmpty() {
  return (
    <div>
      <cartStyle.EmptyTitle>장바구니에 물품이 없습니다.</cartStyle.EmptyTitle>
      <Link to="/">
        <button className="btn-primary mt-10">담으러 가기</button>
      </Link>
    </div>
  );
}
