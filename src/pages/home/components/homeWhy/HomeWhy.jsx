import './homeWhy.scss';
import mcut2 from '../../../../assets/mcut2.png';
import mcut3 from '../../../../assets/mcut3.png';

const HomeWhy = () => {
  const data = [
    {
      title: 'Roasted, Not Fried',
      desc: 'Preserving nutrients while delivering perfect crunch',
    },
    {
      title: 'Clean Label Promise',
      desc: 'Preserving nutrients while delivering perfect crunch',
    },
    {
      title: 'High Protein',
      desc: 'Preserving nutrients while delivering perfect crunch',
    },
    {
      title: 'No Artificial Preservatives',
      desc: 'Preserving nutrients while delivering perfect crunch',
    },
  ];
  return (
    <section className='HomeWhy'>
      <div className='shape'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1920'
          height='2441'
          viewBox='0 0 1920 2441'
          fill='none'
        >
          <path
            d='M560.471 713.254C197.956 671.291 25.0751 378.964 -22.3097 270.851L-149.926 202.789V2440.33H2079.1V0H1795.86C1304.18 0 1232.04 790.992 560.471 713.254Z'
            fill='#D70303'
          />
        </svg>
      </div>
      {/* <div className='shape2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1920'
          height='2141'
          viewBox='0 0 1920 2141'
          fill='none'
        >
          <path
            d='M1380.01 587.556C1804.18 587.556 1949.08 378.964 1996.47 270.851L2124.08 202.789L2124.08 2140.34H-104.945V0H178.295C669.975 0 703.956 587.556 1380.01 587.556Z'
            fill='white'
          />
        </svg>
      </div> */}
      <img src={mcut2} className='mcut2' alt='' />
      <img src={mcut3} className='mcut3' alt='' />
      <div className='content'>
        <div className='title'>3 reasons Why Earthly Good</div>
        <div className='desc'>
          We're committed to bringing you the finest, cleanest snacks and
          supplements
        </div>
        <div className='cards'>
          {data.map((item, index) => (
            <div className='card' key={index}>
              <div className='number'>0{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhy;
