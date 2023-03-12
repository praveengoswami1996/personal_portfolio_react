import './Skills.css';
import { SkillDetails } from '../../constants';
import { SkillBox } from '../../components';

const Skills = () => {

  return (
    <section className='app__skills section__padding' id="skills">
        
        <div className='app__skills-text'>
            <h1>Skills<br /><span>I Have</span></h1>
            
            <div className='app__skills-text_details'>
                <p>- HTML, CSS, JavaScript</p>
                <p>- React JS, React Router, React Redux [with RTK]</p>
                <p>- Tailwind CSS, Responsive Web Designs</p>
                <p>- Git [Version Control], Github</p>
                <p>- C, C++, Python, Django Web Framework</p>
            </div>
            <a href="#contact">
            <button type="button" className='custom__button'>Hire me</button>
            </a>
        </div>

        <div className='app__skills-logo'>
          <div className='app__skills-logo_container'>
            {
              SkillDetails.map((skill) => {
                return <SkillBox key={skill.id} {...skill}/>
              })
            }
          </div>
        </div>

    </section>
  )
}

export default Skills;