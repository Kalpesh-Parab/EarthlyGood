import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products'; // 🔥 Adjust this import path as needed

// Components
import HomeTesti from '../home/components/homeTesti/HomeTesti';
import HomeFAQ from '../home/components/homeFAQ/HomeFAQ';

import './single.scss';

const Single = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  // State to track current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    // Only run if the product exists and has multiple images
    if (!product || !product.images || product.images.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    // Cleanup interval on unmount or when currentImageIndex changes (resets timer)
    return () => clearInterval(intervalId);
  }, [currentImageIndex, product]);

  // Navigation handlers
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1,
    );
  };

  // Fallback if the URL id doesn't match any product
  if (!product) {
    return (
      <section className='Single'>
        <h2>Product not found!</h2>
      </section>
    );
  }

  return (
    <section className='Single'>
      {/* 🔹 Product Information Section */}
      <div className='productInfo'>
        <div className='top'>
          <div className='tleft'>
            <h1>{product.name}</h1>
            <p className='tagline'>{product.tagline}</p>
          </div>
          <div className='tright'>
            <div className='price'>
              <span className='original'>₹{product.pricing.originalPrice}</span>
              <span className='current'>₹{product.pricing.price}</span>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='bleft'>
            {/* 🔹 Updated Image Gallery */}
            <div className='product-images'>
              {product.images.length > 1 && (
                <button className='arrow left-arrow' onClick={prevImage}>
                  &#10094;
                </button>
              )}

              <img
                src={product.images[currentImageIndex]}
                alt={`${product.name} preview`}
              />

              {product.images.length > 1 && (
                <button className='arrow right-arrow' onClick={nextImage}>
                  &#10095;
                </button>
              )}
            </div>

            <div className='ingredients'>
              <h2>Ingredients</h2>
              <br />
              {product.ingredients.join(', ')}
            </div>
            <span className='badge'>{product.badge}</span>
          </div>

          <div className='bright'>
            {/* 🔹 Updated Tags with Bullets */}
            <div className='tags'>
              {product.tags.map((tag, index) => (
                <span key={index} className='tag'>
                  {tag}
                  {index < product.tags.length - 1 && (
                    <span className='bullet'> &bull; </span>
                  )}
                </span>
              ))}
            </div>

            <p className='description'>{product.description}</p>
            <hr />
            <div className='highlights'>
              <h3>Product Highlights</h3>
              <div className='highlist'>
                {product.highlights.map((highlight, index) => (
                  <div key={index} className='high'>
                    <>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='89'
                        height='78'
                        viewBox='0 0 89 78'
                        fill='none'
                      >
                        <rect width='77.4944' height='77.4944' fill='white' />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M88.3847 19.2929L40.7337 66.9438L14.7227 40.9328L23.4652 32.1903L40.7337 49.4589L79.6422 10.5504L88.3847 19.2929Z'
                          fill='#D80303'
                        />
                      </svg>
                      <span className='highlight'>{highlight}</span>
                    </>
                  </div>
                ))}
              </div>
            </div>
            <hr />

            <h3>Nutrition Information</h3>
            <div className='nutrition'>
              <p>Energy - {product.nutrition.energy}</p>
              <p>Protein - {product.nutrition.protein}</p>
              <p>Carbohydrates - {product.nutrition.carbs}</p>
              <p>Fats - {product.nutrition.fat}</p>
              <p>Fiber - {product.nutrition.fiber}</p>
            </div>
            <hr />
            <div className='storage'>
              <h3>Storage Instructions:</h3>
              <p>{product.storage}</p>
            </div>
          </div>
        </div>
      </div>

      <HomeTesti />
      <HomeFAQ />
    </section>
  );
};

export default Single;
