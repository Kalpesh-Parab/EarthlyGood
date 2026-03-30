import './header.scss';
import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className='Header'>
      <div className='container'>
        <div className='headerLeft'>
          <div className='logo' onClick={() => navigate('/')}>
            <img src={logo} alt='logo' />
          </div>

          <div className='links'>
            {navLinks.map((link) => (
              <div
                key={link.path}
                className={`link ${
                  location.pathname === link.path ? 'active' : ''
                }`}
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>

        <div className='headerRight'>
          <div className='searchBox'>
            <img src={search} alt='search' />
            <input type='text' placeholder='Search for our products' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
