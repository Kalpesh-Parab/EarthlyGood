import HomeFAQ from '../home/components/homeFAQ/HomeFAQ';
import HomeTesti from '../home/components/homeTesti/HomeTesti';
import ProductHero from './components/productHero/ProductHero';
import ProductsPage from './components/productsPage/ProductsPage';

const Product = () => {
  return (
    <>
      <ProductHero />
      <ProductsPage />
      <HomeTesti />
      <HomeFAQ />
    </>
  );
};

export default Product;
