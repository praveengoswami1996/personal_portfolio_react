import './Footer.css';
import { wave } from '../../assets';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='app__footer'>
        <img src={wave} alt="Footer bg"/>
        
        <div className='app__footer-content'>
          <p className='app__footer-content_copyright'>Copyright &copy; 2023. Praveen Goswami.</p>
          <div className='app__footer-content_socialIcons'>
                <a 
                  href="https://github.com/praveengoswami1996" 
                  target="_blank"
                  rel='noreferrer'
                ><BsGithub className='icon'/></a>
                
                <a
                  href="https://www.linkedin.com/in/praveen-goswami/" 
                  target="_blank"
                  rel='noreferrer'
                ><BsLinkedin className='icon'/></a>
                
                <a
                  href="https://www.instagram.com" 
                  target="_blank"
                  rel='noreferrer'
                ><BsInstagram className='icon'/></a>
            </div>
        </div>

    </div>
  )
}

export default Footer;