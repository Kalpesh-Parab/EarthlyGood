import './homeTesti.scss';
import prof1 from '../../../../assets/prof1.png';
import prof2 from '../../../../assets/prof2.png';
import { useRef } from 'react';

const HomeTesti = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review:
        'I love Earthly Good! Their snacks are delicious and healthy. Highly recommend! I have tried many of their products and they never disappoint. The quality is top-notch and the flavors are amazing. I also appreciate their commitment to sustainability and using natural ingredients. Earthly Good has become my go-to brand for healthy snacks.',
      stars: 5,
      location: 'New York, USA',
      profile: prof1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      review:
        'Earthly Good has the best healthy snacks! I can never have enough. Their customer service is also fantastic. I had an issue with my order and they resolved it quickly and professionally. I will definitely be a repeat customer!',
      stars: 5,
      location: 'Los Angeles, USA',
      profile: prof2,
    },
    {
      id: 3,
      name: 'John Doe',
      review:
        'I love Earthly Good! Their snacks are delicious and healthy. Highly recommend! I have tried many of their products and they never disappoint. The quality is top-notch and the flavors are amazing. I also appreciate their commitment to sustainability and using natural ingredients. Earthly Good has become my go-to brand for healthy snacks.',
      stars: 5,
      location: 'New York, USA',
      profile: prof1,
    },
    {
      id: 4,
      name: 'Jane Smith',
      review:
        'Earthly Good has the best healthy snacks! I can never have enough. Their customer service is also fantastic. I had an issue with my order and they resolved it quickly and professionally. I will definitely be a repeat customer!',
      stars: 5,
      location: 'Los Angeles, USA',
      profile: prof2,
    },
  ];

  const handleNext = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({
        left: cardsRef.current.offsetWidth * 0.55,
        behavior: 'smooth',
      });
    }
  };

  const cardsRef = useRef(null);

  const handlePrev = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({
        left: -cardsRef.current.offsetWidth * 0.55,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section className='HomeTesti'>
      <div className='title'>WATCH CUSTOMERS CHOOSING EARTHLY GOOD</div>
      <div className='desc'>
        Premium quality snacks and supplements for your wellness journey
      </div>
      <div className='testimonials' ref={cardsRef}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='testimonial'>
            <div className='testTop'>
              <div className='testTopLeft'>
                <div className='stars'>
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='51'
                      height='49'
                      viewBox='0 0 51 49'
                      fill='none'
                    >
                      <path
                        d='M25.3093 0L31.2841 18.3885H50.6189L34.9767 29.7532L40.9515 48.1416L25.3093 36.7769L9.66714 48.1416L15.6419 29.7532L-0.000247955 18.3885H19.3345L25.3093 0Z'
                        fill='#FFC400'
                      />
                    </svg>
                  ))}{' '}
                </div>
                <div className='info'>
                  <div className='name'>{testimonial.name}</div>
                  <div className='location'>{testimonial.location}</div>
                </div>
              </div>
              <div className='testTopRight'>
                <img
                  src={testimonial.profile}
                  alt={testimonial.name}
                  className='profile'
                />
              </div>
            </div>
            <div className='review'>{testimonial.review}</div>
          </div>
        ))}
      </div>
      <div className='tright'>
        <div className='button' onClick={handlePrev}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='56'
            viewBox='0 0 35 56'
            fill='none'
          >
            <path
              d='M8.7738e-05 27.9356L27.935 55.8713L34.7754 49.0316L13.6794 27.9356L34.7747 6.8404L27.9357 0L8.7738e-05 27.9356Z'
              fill='white'
            />
          </svg>
        </div>
        <div className='button' onClick={handleNext}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='56'
            viewBox='0 0 35 56'
            fill='none'
          >
            <path
              d='M34.7753 27.9356L6.8404 55.8713L0 49.0316L21.096 27.9356L0.00072662 6.8404L6.83967 0L34.7753 27.9356Z'
              fill='white'
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeTesti;
