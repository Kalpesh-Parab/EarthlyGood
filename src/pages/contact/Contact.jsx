import HomeFAQ from '../home/components/homeFAQ/HomeFAQ';
import HomeTesti from '../home/components/homeTesti/HomeTesti';
import './contact.scss';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyZvUL5U-5fRoViIQBisO8ZK5mGP3a6QTQK4EEU5hQyzudXsD7MKdzOBpZH7j5k4CT2/exec',
        {
          method: 'POST',
          // mode: 'no-cors', // ⭐ THIS FIXES EVERYTHING
          body: formData,
        },
      );

      // IMPORTANT: no-cors means we can't read response
      alert('Message sent successfully!');
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  };
  return (
    <section className='Contact'>
      <h1>
        We’d Love to Hear <br />
        From You
      </h1>
      <p>
        Have a question about our snacks? Need help with an order? Or just want
        to share your feedback? Our team is always happy to help. Reach out to
        us and we’ll get back to you as soon as possible.
      </p>
      <div className='infos'>
        <div className='info'>
          📍EarthlyGood Foods Pvt. Ltd. <br /> Pune, Maharashtra 411045, India
        </div>
        <div className='info'>
          📞 Phone <br /> +91 98765 43210
        </div>
        <div className='info'>
          ✉️ Email <br /> support@earthlygood.com
        </div>
      </div>
      <h3>Send Us a Message</h3>
      <form className='contactForm' onSubmit={handleSubmit}>
        <div className='formRow'>
          <div className='formGroup'>
            <label>Full Name</label>
            <input name='name' type='text' placeholder='Enter your full name' />
          </div>

          <div className='formGroup'>
            <label>Email Address</label>
            <input
              name='email'
              type='email'
              placeholder='Enter your mail address'
            />
          </div>
        </div>

        <div className='formRow'>
          <div className='formGroup'>
            <label>Phone Number</label>
            <input
              name='phone'
              type='text'
              placeholder='Enter your phone number'
            />
          </div>

          <div className='formGroup'>
            <label>Subject</label>
            <input
              name='subject'
              type='text'
              placeholder='Enter your subject'
            />
          </div>
        </div>

        <div className='formGroup full'>
          <label>Message</label>

          <textarea
            name='message'
            placeholder='Enter your message'
            rows='6'
          ></textarea>
        </div>

        <button type='submit' className='submitBtn'>
          SUBMIT NOW
        </button>
      </form>
      <HomeTesti />
      <HomeFAQ />
    </section>
  );
};

export default Contact;
