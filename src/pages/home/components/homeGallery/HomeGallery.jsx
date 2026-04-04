import './homeGallery.scss';
import g1 from '../../../../assets/g1.png';
import g2 from '../../../../assets/g2.png';
const HomeGallery = () => {
  return (
    <section className='HomeGallery'>
      <div className='strip'>
        <div className='track'>
          {[...Array(30)].map((_, i) => (
            <span key={i} className='text'>
              PURE. GOOD. SIMPLE. PURE. GOOD. SIMPLE.
            </span>
          ))}
        </div>
      </div>
      <div className='photos'>
        <img src={g1} alt='' />
        <img src={g2} alt='' />{' '}
      </div>
    </section>
  );
};

export default HomeGallery;
