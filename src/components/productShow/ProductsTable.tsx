import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ProductsTable(props: any) {
  const { category, catego } = props;

  const calledItems = useSelector((state: any) => state.itemList);
  console.log(calledItems);
  const itemList = calledItems.state;

  function filtering(categ: string, categ1: string) {
    if (categ === 'fasion') {
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
      if (categ1 === 'fasion') {
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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 px-2 pb-20">
      {filtering(category, catego).map((doc: any) => (
        <div key={doc.id} className="m-4 border dark:border-none rounded-lg">
          <Link to={`/${doc.id}`}>
            <figure className="h-80 bg-white flex justify-center items-center rounded-t-lg">
              <img src={doc.image} className="img-primary" alt={doc.title} />
            </figure>
            <div className="h-36 text-black dark:text-gray-400 bg-gray-200 dark:bg-gray-700 flex flex-col p-4 justify-between items-start dark:rounded-b-lg overflow-auto">
              <span className="text-start font-semibold">{doc.title}</span>
              <span className="font-semibold">${doc.price}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
