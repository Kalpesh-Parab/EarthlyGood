import './homeHero.scss';
const HomeHero = () => {
  return (
    <section className='HomeHero'>
      <div className='background'></div>
      <div className='content'>
        <div className='title'>
          SNACK BETTER.
          <br />
          LIVE STRONGER.
        </div>
        <div className='subTitle'>
          Premium roasted makhana & clean protein made for modern living.
        </div>
        <div className='button'>Explore Products</div>
          </div>
          <div className='strip'>
        <div className='track'>
          {[...Array(30)].map((_, i) => (
            <span key={i} className='text'>
              PURE. GOOD. SIMPLE. PURE. GOOD. SIMPLE.
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
