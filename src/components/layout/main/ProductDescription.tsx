import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BreadCrumb from '../../navigation/BreadCrumb';
import { productDescStyles } from '../../../styles/product/productDescStyles';
import { useEffect, useState } from 'react';
import { product } from '../../types/productType';
import { RootState } from '../../../reducers/combReducer';

export default function ProductDescription() {
  const [info, setInfo] = useState<product | null>(null);
  const params = useParams();

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.itemList).state;

  useEffect(() => {
    setInfo(data.find((item: product) => item.id === Number(params.id)));
  }, []);

  if (info === null) return <div>failed to load</div>;

  return (
    <section>
      <productDescStyles.BreadCrumbDiv>
        <BreadCrumb category={info.category} title={info.title} />
      </productDescStyles.BreadCrumbDiv>
      <productDescStyles.Product key={params.docId}>
        <productDescStyles.ProductFigure>
          <productDescStyles.ProductImg src={info.image} alt={info.title} />
        </productDescStyles.ProductFigure>
        <productDescStyles.ProductDescDiv>
          <productDescStyles.ProductTitle>
            {info.title}
          </productDescStyles.ProductTitle>
          <productDescStyles.ProductDesc>
            {info.description}
          </productDescStyles.ProductDesc>
          <productDescStyles.ProductRating>
            {info.rating.rate}/{info.rating.count}
          </productDescStyles.ProductRating>
          <productDescStyles.ProductPrice>
            ${info.price}
          </productDescStyles.ProductPrice>
          <productDescStyles.ProductBtnDiv>
            <productDescStyles.ProductAddBtn
              onClick={() =>
                dispatch({
                  type: 'ADD',
                  payload: { id: info.id, count: 1 },
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
