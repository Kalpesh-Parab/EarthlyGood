import './homeProducts.scss';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../../../data/products';

const HomeProducts = () => {
  const navigate = useNavigate();

  return (
    <section className='HomeProducts'>
      {/* 🔹 Top Tiles */}
      <div className='tiles'>
        {categories.map((cat) => (
          <div
            key={cat.id}
            className='tile'
            onClick={() =>
              navigate('/products', {
                state: { category: cat.id },
              })
            }
          >
            <h3>{cat.title}</h3>
          </div>
        ))}
      </div>

      {/* 🔹 Product Cards */}
      <div className='productsInfo'>
        {categories.map((cat) => (
          <div key={cat.id} className='card'>
            <div className='left'>
              <h3>{cat.title}</h3>
              <p>{cat.subtitle}</p>

              <button
                onClick={() =>
                  navigate('/products', {
                    state: { category: cat.id },
                  })
                }
              >
                Shop {cat.title}
              </button>
            </div>

            <div className='right'>
              <img src={cat.image} alt={cat.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProducts;
