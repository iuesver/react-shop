import ProductsTable from './ProductsTable';
import BreadCrumb from '../components/navigation/BreadCrumb';

import { productStyles } from '../styles/product/productStyles';

export default function AccessoryPage() {
  return (
    <productStyles.Section>
      <productStyles.BreadCrumbDiv>
        <BreadCrumb />
      </productStyles.BreadCrumbDiv>
      <productStyles.Title>악세서리</productStyles.Title>
      <ProductsTable />
    </productStyles.Section>
  );
}
