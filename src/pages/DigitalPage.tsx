import ProductsTable from '../components/layout/main/ProductsTable';
import BreadCrumb from '../components/navigation/BreadCrumb';

import { productStyles } from '../styles/product/productStyles';

export default function DigitalPage() {
  return (
    <productStyles.Section>
      <productStyles.BreadCrumbDiv>
        <BreadCrumb />
      </productStyles.BreadCrumbDiv>
      <productStyles.Title>디지털</productStyles.Title>
      <ProductsTable />
    </productStyles.Section>
  );
}
