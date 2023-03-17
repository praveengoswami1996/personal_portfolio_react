import './Hero.css';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FloatingBox } from '../../components';
import heroimage from '../../assets/heroimage.svg';
import Praveen from './Praveen.pdf';
import { thumbup, crownImage } from '../../assets';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const transition = { duration: 2, type: 'spring' }

const Hero = () => {

  return (
    <section className='app__hero' id="home">

        <div className='app__hero-text'>
            <h1>Hi! I Am<br />
              <span>
                <Typewriter 
                  options={{
                    autoStart: true, 
                    loop: true, 
                    delay: 60,
                    strings: [
                      "Praveen Goswami",
                      "A React Developer",
                      "A Frontend Developer"
                    ]}}
                />
              </span>
            </h1>
            
            <p>Frontend Developer with high level of experience in web designing and development. Producing the quality work.</p>

            <a href={Praveen} download>
                <button type="button" className='custom__button'>
                    Download CV
                </button>
            </a>

            <div className='app__hero-text_socialIcons'>
                <a 
                  href="https://github.com/praveengoswami1996" 
                  target="_blank"
                  rel='noreferrer'
                ><BsGithub size={34} color="var(--orange)"/></a>
                
                <a
                  href="https://www.linkedin.com/in/praveen-goswami/" 
                  target="_blank"
                  rel='noreferrer'
                ><BsLinkedin size={34} color="var(--orange)"/></a>
                
                <a
                  href="https://www.instagram.com" 
                  target="_blank"
                  rel='noreferrer'
                ><BsInstagram size={34} color="var(--orange)"/></a>
            </div>
        </div>

        <div className='app__hero-image'>
            <div className='app__hero-image_container'>
              <img src={heroimage} alt="Hero Section img" className='vectorimage1' />
            </div>

            <motion.div 
              initial={{top: '1rem', right: '10rem'}}
              whileInView={{right: '0.5rem'}}
              transition={transition}
              className='floatingBox1'
            >
              <FloatingBox 
                image={thumbup} 
                label1="Frontend" 
                label2="Development"
              />
            </motion.div>

            <motion.div 
              initial={{bottom: '9.5rem', left: '10rem'}}
              whileInView={{left: '0.5rem'}}
              transition={transition}
              className='floatingBox2'
            >
              <FloatingBox 
                image={crownImage} 
                label1="Web" 
                label2="Development"
              />
            </motion.div>

            <div className='background__effect1'></div>

            <div className='background__effect2'></div>

        </div>

    </section>
  )
}

export default Hero;