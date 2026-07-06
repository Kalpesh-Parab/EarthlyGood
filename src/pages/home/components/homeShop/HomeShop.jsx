import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../../../data/products'; // 🔥 Adjust this import path as needed

import './homeShop.scss';

const HomeShop = () => {
  const cardsRef = useRef(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({
        left: cardsRef.current.offsetWidth * 0.3,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({
        left: -cardsRef.current.offsetWidth * 0.3,
        behavior: 'smooth',
      });
    }
  };

  // 🔥 Optional: Filter only featured products if you don't want to show the entire list
  const displayProducts = products.filter((product) => product.isFeatured);

  return (
    <section className='HomeShop'>
      <div className='shape2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1920'
          height='2141'
          viewBox='0 0 1920 2141'
          fill='none'
        >
          <path
            d='M1380.01 587.556C1804.18 587.556 1949.08 378.964 1996.47 270.851L2124.08 202.789L2124.08 2140.34H-104.945V0H178.295C669.975 0 703.956 587.556 1380.01 587.556Z'
            fill='white'
          />
        </svg>
      </div>
      <div className='content'>
        <div className='top'>
          <div className='tleft'>
            <div className='title'>Shop our healthy products!</div>
            <div className='desc'>
              Premium quality snacks and supplements for your wellness journey
            </div>
          </div>
          <div className='tright'>
            <div className='button' onClick={handlePrev}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='56'
                viewBox='0 0 35 56'
                fill='none'
              >
                <path
                  d='M8.7738e-05 27.9356L27.935 55.8713L34.7754 49.0316L13.6794 27.9356L34.7747 6.8404L27.9357 0L8.7738e-05 27.9356Z'
                  fill='white'
                />
              </svg>
            </div>
            <div className='button' onClick={handleNext}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='56'
                viewBox='0 0 35 56'
                fill='none'
              >
                <path
                  d='M34.7753 27.9356L6.8404 55.8713L0 49.0316L21.096 27.9356L0.00072662 6.8404L6.83967 0L34.7753 27.9356Z'
                  fill='white'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='products' ref={cardsRef}>
          {displayProducts.map((item) => (
            <div className='product' key={item.id}>
              {/* 🔥 Using item.images[0] based on the data schema */}
              <img src={item.images[0]} alt={item.name} />
              <div className='rating'>
                {/* 🔥 Math.floor rounds down 4.5 to 4 whole stars for mapping purposes */}
                {[...Array(Math.floor(item.reviews.rating))].map((_, i) => (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    key={i}
                  >
                    <path
                      d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-2.35-7.68L22 9.24z'
                      fill='gold'
                    />
                  </svg>
                ))}{' '}
                | {/* ✅ Point to the specific number inside the object */}
                <div className='reviews'>{item.reviews.numReviews} reviews</div>
              </div>
              <div className='name'>{item.name}</div>
              <div className='pricing'>
                {/* 🔥 Formatting the originalPrice and price with the currency symbol */}
                <div className='strikedPrice'>
                  ₹ {item.pricing.originalPrice}
                </div>
                <div className='price'>₹ {item.pricing.price}/-</div>
              </div>
              <div
                className='button'
                onClick={() => navigate(`/products/${item.id}`)}
              >
                View Product
              </div>
            </div>
          ))}
        </div>
        <div className='bottom'>
          <div className='button' onClick={() => navigate('/products')}>
            View All Products
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeShop;
