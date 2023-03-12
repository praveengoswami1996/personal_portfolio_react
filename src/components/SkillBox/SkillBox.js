import './SkillBox.css';

const SkillBox = ({ url, label}) => {
  return (
    <div className='app__services-skillslogo_design myanimation'>
        <img src={url} alt={`${label} Logo`}/>
        <p>{label}</p>
    </div>
  )
}

export default SkillBox;