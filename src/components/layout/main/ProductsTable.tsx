import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { productStyles } from '../../../styles/product/productStyles';
import { filterData } from '../../function/public/filterData';
import { product } from '../../types/productType';
import { RootState } from '../../../reducers/combReducer';

export default function ProductsTable() {
  const location = useLocation();
  const data = useSelector((state: RootState) => state.itemList).state;

  return (
    <productStyles.Article>
      {filterData(data, location.pathname).map((item: product) => (
        <productStyles.ProductDiv key={item.id}>
          <Link to={`/${item.id}`}>
            <productStyles.ProductFigure>
              <productStyles.ProductImg src={item.image} alt={item.title} />
            </productStyles.ProductFigure>
            <productStyles.ProductIntro>
              <span className="text-start font-semibold">{item.title}</span>
              <span className="font-semibold">${item.price}</span>
            </productStyles.ProductIntro>
          </Link>
        </productStyles.ProductDiv>
      ))}
    </productStyles.Article>
  );
}
