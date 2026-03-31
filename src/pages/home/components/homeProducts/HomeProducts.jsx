import './homeProducts.scss';
import makhana from '../../../../assets/p1.png';
import protein from '../../../../assets/p2.png';
import jowar from '../../../../assets/p1.png';

const HomeProducts = () => {
  const products = ['Makhana', 'Jowar Puffs', 'Protien Products'];
  const productInfo = [
    {
      name: 'Flavoured Makhana',
      description:
        'Roasted to perfection, seasoned with love. Your guilt-free snacking companion.',
      image: makhana,
      link: '/makhana',
    },
    {
        name: 'Protein Products',
        description:
        'Plant-based power with zero compromise. Fuel your body, naturally.',
        image: protein,
        link: '/protein-products',
    },
    {
        name: 'Jowar Puffs',
        description:
        'Roasted to perfection, seasoned with love. Your guilt-free snacking companion.',
        image: jowar,
        link: '/jowar-puffs',
    },
  ];
  return (
    <section className='HomeProducts'>
      <div className='tiles'>
        {products.map((product, index) => (
          <div key={index} className='tile'>
            <h3>{product}</h3>
          </div>
        ))}
      </div>
      <div className='productsInfo'>
        {productInfo.map((product, index) => (
          <div className='card'>
            <div className='left'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button>Shop {product.name}</button>
            </div>
            <div className='right'>
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProducts;
