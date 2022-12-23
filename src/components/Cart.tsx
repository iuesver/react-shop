import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartEmpty from './CartEmpty';
import PopUp from './PopUp';
import tw from 'tailwind-styled-components';

import BreadCrumb from './navigation/BreadCrumb';

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
const CartSection = tw.section`
    flex flex-col w-full min-h-screen bg-white dark:bg-gray-800 box-border p-4 lg:flex-row justify-between
    `;
const CartItems = tw.section`
    flex flex-col m-4
    `;
const CartItem = tw.article`
    flex flex-col lg:flex-row mt-4
    `;
const ItemTitle = tw.h2`
    text-xl text-black dark:text-gray-400 font-semibold hover:underline underline-offset-2
`;
const ItemPrice = tw.p`
    text-3xl my-4 text-black dark:text-gray-400
`;
const ItemInfo = tw.div`
    flex flex-col justify-evenly pb-12 lg:px-12
    `;
const ItemCount = tw.span`
    mx-4 text-black dark:text-gray-400
`;
const ItemRemoveBtn = tw.button`
    bg-violet-700 rounded-l-lg px-4 h-12 text-white font-semibold hover:bg-violet-800
`;
const ItemAddBtn = tw.button`
    bg-violet-700 rounded-r-lg px-4 h-12 text-white font-semibold hover:bg-violet-800
`;
const BuyBtnLabel = tw.label`
    text-2xl lg:text-xl text-center text-black dark:text-gray-400
`;
const BuyBtnDiv = tw.div`
    flex items-center mt-10 w-72 h-fit
`;
const BreadCrumbDiv = tw.div`
    p-4 bg-white dark:bg-gray-800
`;
export default function Cart() {
  const calledItems = useSelector((state: any) => state.itemList);
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
      <BreadCrumbDiv>
        <BreadCrumb />
      </BreadCrumbDiv>
      <CartSection>
        <CartItems>
          {cart.length === 0 && <CartEmpty />}
          {cart.length !== 0 &&
            docs
              .filter((items: item) =>
                cart.map((item: item) => item.id).includes(items.id)
              )
              .map((item: item) => (
                <CartItem key={item.id}>
                  <Link to={`/${item.id}`}>
                    <img
                      className="img-primary"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                  <ItemInfo>
                    <Link to={`/${item.id}`}>
                      <ItemTitle>{item.title}</ItemTitle>
                    </Link>
                    <ItemPrice>
                      ${' '}
                      {(
                        item.price *
                        cart.find((product: product) => product.id === item.id)
                          .count
                      ).toFixed(2)}
                    </ItemPrice>
                    <div>
                      <ItemRemoveBtn
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
                      </ItemRemoveBtn>
                      <ItemCount>
                        {
                          cart.find(
                            (product: product) => product.id === item.id
                          ).count
                        }
                      </ItemCount>
                      <ItemAddBtn
                        onClick={() => {
                          dispatch({
                            type: 'ADD',
                            payload: { id: item.id, count: item.count },
                          });
                        }}
                      >
                        +
                      </ItemAddBtn>
                    </div>
                  </ItemInfo>
                </CartItem>
              ))}
        </CartItems>
        <BuyBtnDiv>
          <BuyBtnLabel htmlFor="buyBtn">
            총 : ${Number(calculateTotalPrice().toFixed(2))}{' '}
          </BuyBtnLabel>
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
        </BuyBtnDiv>
        {popUp && <PopUp state={popUp} func={setPopUp} />}
      </CartSection>
    </>
  );
}
