import './footer.scss';
import makhana from '../../assets/makhanaCut.png';
import logo from '../../assets/logoBig.png';
const Footer = () => {
  return (
    <div className='Footer'>
      <img className='makhana' src={makhana} alt="" />
      <div className='strip'>
        <div className='track'>
          {[...Array(30)].map((_, i) => (
            <span key={i} className='text'>
              PURE. GOOD. SIMPLE. PURE. GOOD. SIMPLE.
            </span>
          ))}
        </div>
      </div>
      <div className='bottom'>
        <div className='bigLogo'>
          <img src={logo} alt='' />
        </div>
        <div className='midFooter'>
          <div className='pre'>
            Premium roasted makhana & clean protein made for modern living.
            Pure. Good. Simple.
          </div>
          <div className='newsletter'>
            STAY UPDATED
            <div className='input'>
              <input type='text' placeholder='Enter your email' />
              <button>Subscribe</button>
            </div>
          </div>
          <div className='copy'>
            © 2026 Earthly Good. All rights reserved. Made with ❤️ in India.
          </div>
        </div>
        <div className='linksFooter'>
          QUICK LINKS
          <ul>
            <li>About Us</li>
            <li>Products</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
