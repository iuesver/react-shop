import { Outlet, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as act from './actions';
import axios from 'axios';
import useSWR from 'swr';

import Navbar from './components/navigation/Navbar';
import MainPage from './pages/MainPage';
import FashionPage from './pages/FashionPage';
import AccessoryPage from './pages/AccessoryPage';
import DigitalPage from './pages/DigitalPage';
import ProductDescription from './pages/ProductDescription';
import Cart from './pages/cart/Cart';
import Skel from './Skel';
import Footer from './components/Footer';
import ScrollToTop from './components/function/ScrollToTop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
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

function App() {
  const dispatch = useDispatch();
  const apapap = window.location.pathname;
  const productListApi = 'https://fakestoreapi.com/products';
  async function fetcher(url: string) {
    const result = await axios.get(url);

    return result.data;
  }
  const { data: docs, error } = useSWR('post', () => fetcher(productListApi));

  if (error) return <div>failed to load</div>;
  if (!docs) return <Skel path={apapap} />;
  dispatch(act.callapi(docs));

  const something = dispatch(act.callapi(docs));

  return (
    <ScrollToTop>
      <Outlet />
    </ScrollToTop>
  );
}

export default App;
