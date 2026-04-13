import './productCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className='ProductCard'>
      <div className='imageWrapper'>
        <img src={product.images[0]} alt={product.name} />
      </div>

      <h3>{product.name}</h3>


      <div className='price'>
        <span className='original'>₹{product.pricing.originalPrice}</span>
        <span className='current'>₹{product.pricing.price}</span>
      </div>

      <p className='tagline'>FREE DOORSTEP SHIPPPING ON ORDER</p>
      <button>Contact Us Now</button>
    </div>
  );
};

export default ProductCard;
