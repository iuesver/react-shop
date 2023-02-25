import Index from '../components/carousel/Index';
import ProductsTable from './ProductsTable';
import tw from 'tailwind-styled-components';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Title = tw.h1`
  text-3xl font-bold p-6 text-black dark:text-white
  `;
export const MainPage = () => {
  const data = useSelector((state: any) => state);

  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div>
      <div id="container" className="w-full">
        <Index />
        <div className="text-center bg-white dark:bg-gray-800">
          <Title>패션</Title>
          <div>
            <ProductsTable />
          </div>
          <br />
          <Title>악세서리</Title>
          <div>
            <ProductsTable />
          </div>
          <br />
          <Title>디지털</Title>
          <div>
            <ProductsTable />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};
