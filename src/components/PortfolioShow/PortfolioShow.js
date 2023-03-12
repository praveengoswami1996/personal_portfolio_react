import './PortfolioShow.css';
import { themeContext } from '../../Context/Context';
import { useContext } from 'react';

const PortfolioShow = ({ id, title, stack, screenshot, description, githubLink, deploylink  }) => {
  const { state } = useContext(themeContext);
  const darkMode = state.darkMode;
  
  return (
    <div 
      className='app__portfolioshow'
      style={{background: darkMode ? '#333': ''}}
    >
      <div className='app__portfolioshow-image'>
        <img src={screenshot} alt="Project Screenshot"/>
        <div className='app__portfolioshow-image_overlay'>{description}</div>
      </div>
      
      <p 
        className='app__portfolioshow-title'
        style={{color: darkMode ? '#fff': ''}}
      >{title}</p>

      <div className='app__portfolioshow-stack'>
        <h3>Stack</h3>
        <div className='app__portfolioshow-stackshow'>
          {stack.map((tech) => {
            return <p key={tech}>{tech}</p>;
          })}
        </div>
      </div>

      <div className='app__portfolioshow-cta'>
        <a href={githubLink} target="_blank" rel="noreferrer" className="github-btn">Source Code</a>
        <a href={deploylink} target="_blank" rel="noreferrer" className="deploy-btn">Live Demo</a>
      </div>

    </div>
  )
}

export default PortfolioShow;
