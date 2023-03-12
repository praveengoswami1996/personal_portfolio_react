import './FloatingBox.css';

const FloatingBox = ({ image, label1, label2 }) => {
  return (
    <div className='app__floatingbox'>
      
      <div className='app__floatingbox-img'>
        <img src={image} alt="Floating Img"/>
      </div>

      <div className='app__floatingbox-desc'>
        <p>{label1}<br />{label2}</p>
      </div>

    </div>
  )
}

export default FloatingBox;