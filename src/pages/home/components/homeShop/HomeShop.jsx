import './homeShop.scss';
import { useRef } from 'react';
import s1 from '../../../../assets/s1.png';
import s2 from '../../../../assets/s2.png';
import s3 from '../../../../assets/s3.png';
import s4 from '../../../../assets/s4.png';
import { useNavigate } from 'react-router-dom';
const HomeShop = () => {
  const data = [
    {
      photo: s1,
      name: '100GM MAKHANA PACKAGE - pack of 1',
      price: '₹ 200',
      strikedPrice: '₹ 300',
      rating: 5,
      reviews: 78,
    },
    {
      photo: s2,
      name: '100GM MAKHANA PACKAGE - pack of 1',
      price: '₹ 200',
      strikedPrice: '₹ 300',
      rating: 5,
      reviews: 78,
    },
    {
      photo: s3,
      name: '100GM MAKHANA PACKAGE - pack of 1',
      price: '₹ 200',
      strikedPrice: '₹ 300',
      rating: 5,
      reviews: 78,
    },
    {
      photo: s4,
      name: '100GM MAKHANA PACKAGE - pack of 1',
      price: '₹ 200',
      strikedPrice: '₹ 300',
      rating: 5,
      reviews: 78,
    },
    {
      photo: s1,
      name: '100GM MAKHANA PACKAGE - pack of 1',
      price: '₹ 200',
      strikedPrice: '₹ 300',
      rating: 5,
      reviews: 78,
    },
    {
      photo: s1,
      name: '100GM MAKHANA PACKAGE - pack of 1',
      price: '₹ 200',
      strikedPrice: '₹ 300',
      rating: 5,
      reviews: 78,
    },
    {
      photo: s2,
      name: '100GM MAKHANA PACKAGE - pack of 1',
      price: '₹ 200',
      strikedPrice: '₹ 300',
      rating: 5,
      reviews: 78,
    },
    {
      photo: s3,
      name: '100GM MAKHANA PACKAGE - pack of 1',
      price: '₹ 200',
      strikedPrice: '₹ 300',
      rating: 5,
      reviews: 78,
    },
    {
      photo: s4,
      name: '100GM MAKHANA PACKAGE - pack of 1',
      price: '₹ 200',
      strikedPrice: '₹ 300',
      rating: 5,
      reviews: 78,
    },
    {
      photo: s1,
      name: '100GM MAKHANA PACKAGE - pack of 1',
      price: '₹ 200',
      strikedPrice: '₹ 300',
      rating: 5,
      reviews: 78,
    },
  ];

  const cardsRef = useRef(null);

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
      left: -cardsRef.current.offsetWidth * .3,
      behavior: 'smooth',
    });
  }
  };
  
  const navigate = useNavigate();
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
          {data.map((item, index) => (
            <div className='product' key={index}>
              <img src={item.photo} alt='' />
              <div className='rating'>
                {[...Array(item.rating)].map((_, i) => (
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
                | <div className='reviews'>{item.reviews} reviews</div>
              </div>
              <div className='name'>{item.name}</div>
              <div className='pricing'>
                <div className='strikedPrice'>{item.strikedPrice}</div>
                <div className='price'>{item.price}/-</div>
              </div>
              <div className='button'>View Product</div>
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
