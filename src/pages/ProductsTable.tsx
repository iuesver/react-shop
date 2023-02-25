import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productStyles } from '../styles/product/productStyles';

export default function ProductsTable(props: any) {
  const { category, catego } = props;

  const calledItems = useSelector((state: any) => state.itemList);
  console.log(calledItems);
  const itemList = calledItems.state;

  function filtering(categ: string, categ1: string) {
    if (categ === 'fashion') {
      return itemList.filter(
        (item: any) =>
          item.category === "men's clothing" ||
          item.category === "women's clothing"
      );
    } else if (categ === 'accessory') {
      return itemList.filter((item: any) => item.category === 'jewelery');
    } else if (categ === 'digital') {
      return itemList.filter((item: any) => item.category === 'electronics');
    } else if (categ === 'main') {
      if (categ1 === 'fashion') {
        return itemList
          .filter(
            (item: any) =>
              item.category === "men's clothing" ||
              item.category === "women's clothing"
          )
          .slice(0, 4);
      } else if (categ1 === 'accessory') {
        return itemList
          .filter((item: any) => item.category === 'jewelery')
          .slice(0, 4);
      } else if (categ1 === 'digital') {
        return itemList
          .filter((item: any) => item.category === 'electronics')
          .slice(0, 4);
      } else return itemList;
    } else return itemList;
  }
  return (
    <productStyles.Article>
      {filtering(category, catego).map((doc: any) => (
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
