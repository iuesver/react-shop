import { Outlet, createBrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as act from './actions';
import axios from 'axios';
import useSWR from 'swr';

import Header from './components/layout/header/Header';
import { MainPage } from './pages/MainPage';
import FashionPage from './pages/FashionPage';
import AccessoryPage from './pages/AccessoryPage';
import DigitalPage from './pages/DigitalPage';
import ProductDescription from './components/layout/main/ProductDescription';
import Cart from './pages/cart/Cart';
import Skel from './Skel';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/function/public/ScrollToTop';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { RootState } from './reducers/combReducer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Footer />
      </>
    ),
    children: [
      { path: '/', element: <MainPage /> },
      {
        path: '/fashion',
        element: <FashionPage />,
      },
      {
        path: '/accessory',
        element: <AccessoryPage />,
      },
      {
        path: '/digital',
        element: <DigitalPage />,
      },
      {
        path: '/:id',
        element: <ProductDescription />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const stateData = useSelector((state: RootState) => state.itemList);

  const API_URL = 'https://fakestoreapi.com/products';
  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, error } = useSWR('post', () => fetcher(API_URL));

  useEffect(() => {
    if (!stateData) {
      dispatch(act.callapi(data));
    }
  }, []);

  if (error) return <div>failed to load</div>;
  if (!stateData) return <Skel path={location.pathname} />;

  return (
    <ScrollToTop>
      <Outlet />
    </ScrollToTop>
  );
};

export default App;
