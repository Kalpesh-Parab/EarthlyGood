import './about.scss';
import jowar from '../../assets/jowar.png';
import realMakhana from '../../assets/realMakhana.png';
import mcut3 from '../../assets/mcut3.png';
import sun from '../../assets/sun.png';
import HomeTesti from '../home/components/homeTesti/HomeTesti';
import HomeFAQ from '../home/components/homeFAQ/HomeFAQ';
const About = () => {
  const promises = [
    'Made with wholesome ingredients',
    'Light, crunchy, and flavorful',
    'Roasted, not fried',
    'Perfect for everyday snacking',
  ];
  return (
    <section className='About'>
      <div className='first'>
        <h1>
          Better Snacks for <br />
          Better Living
        </h1>
        <p>
          We believe snacking should be both delicious and nourishing. Our
          mission is to bring healthier alternatives to everyday snacks by using
          wholesome ingredients and simple recipes. Our journey started with a
          simple idea — to transform traditional superfoods like makhana and
          jowar into modern, tasty snacks that fit today’s lifestyle.
        </p>
        <div className='jowar'>
          <img src={jowar} alt='' />
        </div>
      </div>
      <div className='second'>
        <h3>What We Do</h3>
        <p>
          We create light, crunchy, and nutritious snacks made from natural
          ingredients. Every product is carefully crafted to maintain the
          goodness of the ingredients while delivering great taste.
        </p>
      </div>
      <div className='third'>
        <img src={realMakhana} alt='' />
        <div className='pleft'>
          Our roasted makhana and jowar puffs are designed for people who want a
          snack that is both healthy and satisfying.
        </div>
      </div>
      <div className='fourth'>
        <h3>Our Promise</h3>
        <p>
          We are committed to creating snacks that you can enjoy without guilt.
        </p>

        <div className='promises'>
          {promises.map((promise, index) => (
            <div key={index} className='promise'>
              {promise}
            </div>
          ))}
        </div>
        <img src={mcut3} alt='' />
      </div>
      <div className='fifth'>
        <h3>Our Vision</h3>
        <p>
          Our vision is to make healthy snacking easy and accessible for
          everyone. By combining traditional ingredients with modern flavors, we
          aim to redefine the way people snack.
        </p>
      </div>

      <div className='sixth'>
        <h1>Because good snacks should make you feel good too.</h1>
        <img src={sun} alt="" />
      </div>
      <HomeTesti />
      <HomeFAQ/>
    </section>
  );
};

export default About;
