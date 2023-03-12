import './Certifications.css';
import { CertificateDetails } from '../../constants';
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { useState } from 'react';


const Certifications = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftArrowClick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((currentImageIndex) => currentImageIndex - 1);
    }
  }

  const handleRightArrowClick = () => {
    if (currentImageIndex < CertificateDetails.length - 1) {
      setCurrentImageIndex((currentImageIndex) => currentImageIndex + 1);
    }
  }

  return (
    <section className='app__certifications section__padding section__margin' id="certifications">
        
        <div className='app__certifications-text'>
            <h1>Certifications</h1>
        </div>

        <div className='app__certifications-carousel'>
            <div className='app__certifications-carousel_slides'>
              <img src={CertificateDetails[currentImageIndex].url} alt="slider img" />
            </div>

            <BsFillArrowLeftSquareFill 
              className='carousel_arrow-left' 
              size={32} 
              color="#333333a6"
              onClick={handleLeftArrowClick}
            />

            <BsFillArrowRightSquareFill 
              className='carousel_arrow-right' 
              size={32} 
              color="#333333a6"
              onClick={handleRightArrowClick}
            />
            <div className='app__certifications-carousel_pointers'>
                {
                  CertificateDetails.map((certificate, index) => {
                    return (
                      <div
                        key={certificate.id} 
                        style={index === currentImageIndex ? {backgroundColor: 'gray'}: {}}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    )                   
                  })
                }
            </div>
            
        </div>

    </section>
  )
}

export default Certifications;