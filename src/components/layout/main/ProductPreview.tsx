import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../reducers/combReducer';
import { productStyles } from '../../../styles/product/productStyles';
import { filterData } from '../../function/public/filterData';
import { product } from '../../types/productType';

export const ProductPreview = () => {
  const data = useSelector((state: RootState) => state.itemList).state;
  const dataObj = {
    fashionArray: {
      data: filterData(data, '/fashion').slice(0, 4),
      title: '패션',
    },
    accessoryArray: {
      data: filterData(data, '/accessory').slice(0, 4),
      title: '악세서리',
    },
    digitalArray: {
      data: filterData(data, '/digital').slice(0, 4),
      title: '디지털',
    },
  };

  return (
    <article className="text-center bg-white dark:bg-gray-800">
      {Object.values(dataObj).map(
        (dataArray: { data: product[]; title: string }) => (
          <article
            key={
              Object.values(dataObj).findIndex(
                (item: { data: product[]; title: string }) =>
                  item.title === dataArray.title
              ) + 1
            }
          >
            <productStyles.MainTitle>{dataArray.title}</productStyles.MainTitle>
            <productStyles.Article>
              {dataArray.data.map((item: product) => (
                <productStyles.ProductDiv key={item.id}>
                  <Link to={`/${item.id}`}>
                    <productStyles.ProductFigure>
                      <productStyles.ProductImg
                        src={item.image}
                        alt={item.title}
                      />
                    </productStyles.ProductFigure>
                    <productStyles.ProductIntro>
                      <span className="text-start font-semibold">
                        {item.title}
                      </span>
                      <span className="font-semibold">${item.price}</span>
                    </productStyles.ProductIntro>
                  </Link>
                </productStyles.ProductDiv>
              ))}
              <br />
            </productStyles.Article>
          </article>
        )
      )}
    </article>
  );
};
