import { useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import './productSection.scss';

const ProductSection = ({ title, subtitle, products }) => {
  const visibleCount = 3; // desktop (we can make responsive later)
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + visibleCount < products.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  return (
    <section className='ProductSection'>
      {/* 🔹 Header */}
      <div className='sectionHeader'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      {/* 🔹 Carousel */}
      <div className='sectionBody'>
        {/* LEFT BUTTON */}
        <div className='button left' onClick={handlePrev}>
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

        {/* PRODUCTS */}
        <div className='sectionGrid'>
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <div className='button right' onClick={handleNext}>
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
    </section>
  );
};

export default ProductSection;
