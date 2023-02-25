import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { productStyles } from '../styles/product/productStyles';
import { filterData } from '../components/function/public/filterData';
import { product } from '../components/types/productType';
import { RootState } from '../reducers/combReducer';

export default function ProductsTable() {
  const location = useLocation();
  const data = useSelector((state: RootState) => state.itemList).state;

  return (
    <productStyles.Article>
      {filterData(data, location.pathname).map((doc: product) => (
        <productStyles.ProductDiv key={doc.id}>
          <Link to={`/${doc.id}`}>
            <productStyles.ProductFigure>
              <productStyles.ProductImg src={doc.image} alt={doc.title} />
            </productStyles.ProductFigure>
            <productStyles.ProductIntro>
              <span className="text-start font-semibold">{doc.title}</span>
              <span className="font-semibold">${doc.price}</span>
            </productStyles.ProductIntro>
          </Link>
        </productStyles.ProductDiv>
      ))}
    </productStyles.Article>
  );
}
