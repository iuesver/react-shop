import ProductsTable from './ProductsTable';
import tw from 'tailwind-styled-components';
import BreadCrumb from '../components/navigation/BreadCrumb';

const Title = tw.h1`
  text-3xl font-bold pb-6 text-center text-black dark:text-white
  `;

export default function FashionPage() {
  return (
    <div className="min-h-full bg-white dark:bg-gray-800">
      <div className="p-4">
        <BreadCrumb />
      </div>
      <Title>패션</Title>
      <div>
        <ProductsTable category={'fasion'} />
      </div>
    </div>
  );
}
