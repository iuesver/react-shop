import ProductsTable from '../components/layout/main/ProductsTable';
import BreadCrumb from '../components/navigation/BreadCrumb';

import { productStyles } from '../styles/product/productStyles';

export default function FashionPage() {
  return (
    <productStyles.Section>
      <productStyles.BreadCrumbDiv>
        <BreadCrumb />
      </productStyles.BreadCrumbDiv>
      <productStyles.Title>패션</productStyles.Title>
      <ProductsTable />
    </productStyles.Section>
  );
}
