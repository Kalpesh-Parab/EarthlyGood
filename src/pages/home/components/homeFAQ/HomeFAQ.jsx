import { useState } from 'react';
import './homeFAQ.scss';
import faqbg from '../../../../assets/faqbg.png';
import mcut4 from '../../../../assets/mcut4.png';
import mcut5 from '../../../../assets/mcut5.png';

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is Earthly Good?',
      answer:
        'Earthly Good is an online store dedicated to providing eco-friendly and sustainable products for everyday use.',
    },
    {
      question: 'What types of products do you offer?',
      answer:
        'We offer a variety of products including reusable bags, bamboo toothbrushes, stainless steel straws, etc.',
    },
    {
      question: 'How can I place an order?',
      answer: 'Browse products → add to cart → checkout securely.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, shipping depends on location.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='HomeFAQ'>
      <div className='left'>
        <div className='title'>FREQUENTLY ASKED QUESTIONS</div>

        <div className='faqList'>
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`faqItem ${isActive ? 'active' : ''}`}
                onClick={() => handleToggle(index)}
              >
                <div className='questionRow'>
                  <div className='question'>{item.question}</div>

                  <div className={`icon ${isActive ? 'rotate' : ''}`}>+</div>
                </div>

                <div className='answer'>{item.answer}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='right'>
        <img src={faqbg} alt='' />
      </div>
      <div className='shape'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1920'
          height='1505'
          viewBox='0 0 1920 1505'
          fill='none'
        >
          <path
            d='M560.471 713.254C197.956 671.291 25.0751 378.964 -22.3097 270.851L-149.926 202.789V2440.33H2079.1V0H1795.86C1304.18 0 1232.04 790.992 560.471 713.254Z'
            fill='#D70303'
          />
        </svg>
      </div>
      <img src={mcut4} className='mcut4' alt='' />
      <img src={mcut5} className='mcut5' alt='' />
    </section>
  );
};

export default HomeFAQ;
