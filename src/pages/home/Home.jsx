import HomeFAQ from './components/homeFAQ/HomeFAQ';
import HomeGallery from './components/homeGallery/HomeGallery';
import HomeHero from './components/homeHero/HomeHero';
import HomeProducts from './components/homeProducts/HomeProducts';
import HomeShop from './components/homeShop/HomeShop';
import HomeTesti from './components/homeTesti/HomeTesti';
import HomeWhy from './components/homeWhy/HomeWhy';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeProducts />
      <HomeWhy />
      <HomeShop />
      <HomeGallery />
      <HomeTesti />
      <HomeFAQ/>
    </>
  );
};

export default Home;
