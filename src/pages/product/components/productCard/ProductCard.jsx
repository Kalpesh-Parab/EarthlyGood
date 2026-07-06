import { useNavigate } from 'react-router-dom';
import './productCard.scss';

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // 🔥 Initialize navigate hook

  // 🔥 Navigate to the single product page when clicked
  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      className='ProductCard'
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <div className='imageWrapper'>
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className='rating'>
        {/* 🔥 FIX 1: Point to product.reviews.rating and use Math.floor since it's a decimal (4.5) */}
        {[...Array(Math.floor(product.reviews.rating))].map((_, i) => (
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
        {/* 🔥 FIX 2: Point specifically to numReviews instead of the whole object */}
        | <div className='reviews'>{product.reviews.numReviews} reviews</div>
      </div>
      <h3>{product.name}</h3>

      <div className='price'>
        <span className='original'>₹{product.pricing.originalPrice}</span>
        <span className='current'>₹{product.pricing.price}/-</span>
      </div>

      {/* 🔥 FIX 3: Added handleCardClick to the button so it navigates as well */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Stops the div's click event from firing at the same time
          handleCardClick(); // Triggers the navigation
        }}
      >
        View Product
      </button>
    </div>
  );
};

export default ProductCard;
