import './Contact.css';
import { MdEmail, MdPhoneIphone, MdLocationPin } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { themeContext } from '../../Context/Context';
import { useContext } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [mailSent, setMailSent] = useState(false);
    const form = useRef();
    const { state } = useContext(themeContext);
    const darkMode = state.darkMode;

    const handleNameInput = (event) => {
        setName(event.target.value);
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const handleMessageInput = (event) => {
        setMessage(event.target.value);
    }

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_5izq7sj', 'template_7m41zlu', form.current, 'Obmi0LVx71qqNZa2j')
        .then((result) => {
            setMailSent(true);
        }, (error) => {
            console.log(error.text);
            alert("Your message could not be sent. We are sorry for the inconvenience.")
        });
      setName('');
      setEmail('');
      setMessage('');
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
                <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={handleNameInput} 
                    placeholder='Your name' 
                    className='inputfield'
                    style={{
                        background: darkMode ? '#333': '#fff',
                        color: darkMode ? '#fff': '#333'
                    }}
                />

                <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={handleEmailInput} 
                    placeholder='Your email' 
                    className='inputfield'
                    style={{
                        background: darkMode ? '#333': '#fff',
                        color: darkMode ? '#fff': '#333'
                    }}
                />

                <textarea 
                    name="message" 
                    value={message}
                    onChange={handleMessageInput}
                    placeholder='Your message' 
                    className='messagefield' 
                    rows={5}
                    style={{
                        background: darkMode ? '#333': '#fff',
                        color: darkMode ? '#fff': '#333'
                    }}
                />

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