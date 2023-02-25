import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BreadCrumb from '../components/navigation/BreadCrumb';

import { productDescStyles } from '../styles/product/productDescStyles';
import { useEffect } from 'react';

export default function ProductDescription() {
  const params = useParams();
  const dispatch = useDispatch();
  const calledItems = useSelector((state: any) => state.itemList);

  let selectedItem = calledItems.state[Number(params.docId) - 1];
  let firstLocation = '';
  if (
    selectedItem.category === "men's clothing" ||
    selectedItem.category === "women's clothing"
  ) {
    firstLocation = '패션';
  } else if (selectedItem.category === 'jewelery') {
    firstLocation = '악세서리';
  } else if (selectedItem.category === 'electronics') {
    firstLocation = '디지털';
  } else firstLocation = '메인';

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <section>
      <productDescStyles.BreadCrumbDiv>
        <BreadCrumb
          category={selectedItem.category}
          title={selectedItem.title}
        />
      </productDescStyles.BreadCrumbDiv>
      <productDescStyles.Product key={params.docId}>
        <productDescStyles.ProductFigure>
          <productDescStyles.ProductImg
            src={selectedItem.image}
            alt={selectedItem.title}
          />
        </productDescStyles.ProductFigure>
        <productDescStyles.ProductDescDiv>
          <productDescStyles.ProductTitle>
            {selectedItem.title}
          </productDescStyles.ProductTitle>
          <productDescStyles.ProductDesc>
            {selectedItem.description}
          </productDescStyles.ProductDesc>
          <productDescStyles.ProductRating>
            {selectedItem.rating.rate}/{selectedItem.rating.count}
          </productDescStyles.ProductRating>
          <productDescStyles.ProductPrice>
            ${selectedItem.price}
          </productDescStyles.ProductPrice>
          <productDescStyles.ProductBtnDiv>
            <productDescStyles.ProductAddBtn
              onClick={() =>
                dispatch({
                  type: 'ADD',
                  payload: { id: selectedItem.id, count: 1 },
                })
              }
            >
              장바구니에 담기
            </productDescStyles.ProductAddBtn>
            <productDescStyles.ProductCartBtn>
              <Link to="/cart">장바구니로 이동</Link>
            </productDescStyles.ProductCartBtn>
          </productDescStyles.ProductBtnDiv>
        </productDescStyles.ProductDescDiv>
      </productDescStyles.Product>
    </section>
  );
}
