import HomeHero from './components/homeHero/HomeHero';
import HomeProducts from './components/homeProducts/HomeProducts';
import HomeShop from './components/homeShop/HomeShop';
import HomeWhy from './components/homeWhy/HomeWhy';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeProducts />
      <HomeWhy />
      <HomeShop/>
    </>
  );
};

export default Home;
