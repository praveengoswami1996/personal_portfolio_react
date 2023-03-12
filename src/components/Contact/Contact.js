import './Contact.css';
import { MdEmail, MdPhoneIphone, MdLocationPin } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

const Contact = () => {
    const [mailSent, setMailSent] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5izq7sj', 'template_7m41zlu', form.current, 'Obmi0LVx71qqNZa2j')
        .then((result) => {
            setMailSent(true);
        }, (error) => {
            console.log(error.text);
            alert("Your message could not be sent. We are sorry for the inconvenience.")
        });
    };  


  return (
    <section className='app__contact section__padding section__margin' id="contact">
        <div className='app__contact-details'>
            <h1>Get in Touch<br /><span>Contact me</span></h1>

            <div className='app__contact-details_info'>
                <div>   
                    <MdEmail size={36} color="#333"/>
                    <p>praveen828589@gmail.com</p>
                </div>
                <div>   
                    <MdPhoneIphone size={36} color="#333"/>
                    <p>+91-8700624614</p>
                </div>
                <div>   
                    <MdLocationPin size={36} color="#333"/>
                    <p>New Delhi, India</p>
                </div>
            </div>

        </div>

        <div className='app__contact-form'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Your name' className='inputfield'/>

                <input type="email" name="email" placeholder='Your email' className='inputfield'/>

                <textarea name="message" placeholder='Your message' className='messagefield' rows={5}/>

                <div className='button_and_message'>
                    <button type='submit' className='custom__button'>
                        Send <span><FaPaperPlane size={20}/></span>
                    </button>
                    {
                        mailSent &&
                        <span className='successmessage'>Thankyou for messaging me!</span>
                    }
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact;