import Index from '../components/carousel/Index';
import { ProductPreview } from '../components/layout/main/ProductPreview';

export const MainPage = () => {
  return (
    <section id="container" className="w-full">
      <Index />
      <ProductPreview />
    </section>
  );
};
