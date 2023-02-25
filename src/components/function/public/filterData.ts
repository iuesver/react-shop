import { product } from '../../types/productType';

export const filterData = (data: product[], path: string): product[] => {
  switch (path) {
    case '/fashion':
      const fashionRes = data.filter(
        (item: product) =>
          item.category === "men's clothing" ||
          item.category === "women's clothing"
      );
      return fashionRes;
    case '/accessory':
      const accessoryRes = data.filter(
        (item: product) => item.category === 'jewelery'
      );
      return accessoryRes;
    case '/digital':
      const digitalRes = data.filter(
        (item: product) => item.category === 'electronics'
      );
      return digitalRes;
    default:
      return [];
  }
};
