import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartEmpty from './CartEmpty';
import PopUp from '../../components/navigation/PopUp';
import { cartStyle } from '../../styles/cart/cartStyles';

import BreadCrumb from '../../components/navigation/BreadCrumb';
import { RootState } from '../../reducers/combReducer';

type item = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: number;
  title: string;
  count: number;
};

type product = {
  id: number;
  count: number;
};
export default function Cart() {
  const calledItems = useSelector((state: RootState) => state.itemList);
  const docs = calledItems.state;
  const data = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const [cart, setCart] = useState(data);
  const [popUp, setPopUp] = useState(false);

  const removeFromCart = (id: number) => {
    const temp = cart.filter((product: product) => product.id !== id);
    setCart(temp);
  };

  const calculateTotalPrice = (): number => {
    let total = 0;
    const arr = docs.filter((item: item) =>
      cart.map((product: product) => product.id).includes(item.id)
    );
    const arr2 = arr.map(
      (item: item) =>
        item.price *
        cart.find((product: product) => product.id === item.id).count
    );
    arr2.reduce((acc: number, cur: number) => {
      acc += cur;
      return (total = acc);
    }, 0);
    return total;
  };

  return (
    <>
      <cartStyle.BreadCrumbDiv>
        <BreadCrumb />
      </cartStyle.BreadCrumbDiv>
      <cartStyle.CartSection>
        <cartStyle.CartItems>
          {cart.length === 0 && <CartEmpty />}
          {cart.length !== 0 &&
            docs
              .filter((items: item) =>
                cart.map((item: item) => item.id).includes(items.id)
              )
              .map((item: item) => (
                <cartStyle.CartItem key={item.id}>
                  <Link to={`/${item.id}`}>
                    <img
                      className="img-primary"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                  <cartStyle.ItemInfo>
                    <Link to={`/${item.id}`}>
                      <cartStyle.ItemTitle>{item.title}</cartStyle.ItemTitle>
                    </Link>
                    <cartStyle.ItemPrice>
                      ${' '}
                      {(
                        item.price *
                        cart.find((product: product) => product.id === item.id)
                          .count
                      ).toFixed(2)}
                    </cartStyle.ItemPrice>
                    <div>
                      <cartStyle.ItemRemoveBtn
                        onClick={() => {
                          if (
                            cart.find(
                              (product: product) => product.id === item.id
                            ).count === 1
                          ) {
                            removeFromCart(item.id);
                            dispatch({
                              type: 'REMOVE',
                              payload: { id: item.id, count: item.count },
                            });
                          } else {
                            dispatch({
                              type: 'REMOVE',
                              payload: { id: item.id, count: item.count },
                            });
                          }
                        }}
                      >
                        -
                      </cartStyle.ItemRemoveBtn>
                      <cartStyle.ItemCount>
                        {
                          cart.find(
                            (product: product) => product.id === item.id
                          ).count
                        }
                      </cartStyle.ItemCount>
                      <cartStyle.ItemAddBtn
                        onClick={() => {
                          dispatch({
                            type: 'ADD',
                            payload: { id: item.id, count: item.count },
                          });
                        }}
                      >
                        +
                      </cartStyle.ItemAddBtn>
                    </div>
                  </cartStyle.ItemInfo>
                </cartStyle.CartItem>
              ))}
        </cartStyle.CartItems>
        <cartStyle.BuyBtnDiv>
          <cartStyle.BuyBtnLabel htmlFor="buyBtn">
            총 : ${Number(calculateTotalPrice().toFixed(2))}{' '}
          </cartStyle.BuyBtnLabel>
          <button
            className="btn-primary ml-5"
            id="buyBtn"
            onClick={() => {
              setPopUp(!popUp);
            }}
          >
            {' '}
            구매하기{' '}
          </button>
        </cartStyle.BuyBtnDiv>
        {popUp && <PopUp state={popUp} func={setPopUp} />}
      </cartStyle.CartSection>
    </>
  );
}
