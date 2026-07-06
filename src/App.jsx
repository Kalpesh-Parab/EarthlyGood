import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Product from './pages/product/Product';
import Single from './pages/single/Single'; // 🔥 Import your Single page here
import About from './pages/about/About';
import WhyUs from './pages/whyUs/WhyUs';
import Contact from './pages/contact/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />

        {/* 🔥 Add the dynamic route for single products */}
        <Route path='/products/:id' element={<Single />} />

        <Route path='/about' element={<About />} />
        <Route path='/why-us' element={<WhyUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
