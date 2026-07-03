import { useEffect, useState } from 'react';
import './header.scss';
import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Keep header visible if the mobile menu is open to prevent glitches
      if (isMobileMenuOpen) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Close mobile menu when shifting route paths
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div
      className={`Header ${showHeader ? 'show' : 'hide'} ${isMobileMenuOpen ? 'mobile-open' : ''}`}
    >
      <div className='container'>
        <div className='headerLeft'>
          <div className='logo' onClick={() => navigate('/')}>
            <img src={logo} alt='logo' />
          </div>

          {/* Desktop Links */}
          <div className='links desktop-only'>
            {navLinks.map((link) => (
              <div
                key={link.path}
                className={`link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Search */}
        <div className='headerRight desktop-only'>
          <div className='searchBox'>
            <img src={search} alt='search' />
            <input type='text' placeholder='Search for our products' />
          </div>
        </div>

        {/* Mobile Elements */}
        <div className='mobileActions mobile-only'>
          <div className='searchBoxMini'>
            <img src={search} alt='search' />
            <span>Search</span>
          </div>

          <button
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle Navigation'
          >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobileMenuDrawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className='mobileLinks'>
          {navLinks.map((link) => (
            <div
              key={link.path}
              className={`mobileLink ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => navigate(link.path)}
            >
              {link.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
