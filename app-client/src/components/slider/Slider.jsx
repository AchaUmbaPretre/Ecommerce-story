import React from 'react'
import "./slider.scss"
import image6 from '../../assets/image6.jpg'
import image5 from '../../assets/image5.jpg'
import image4 from '../../assets/image4.jpg'
import { useState } from 'react'


const Slider = () => {

  const [slider, setSlider] = useState(0);

  const handSliderNext = () =>{
    setSlider(slider === 0 ? 2 : (prev) => prev - 1)
  }

  const handSliderPrev = () =>{
    setSlider(slider === 2 ? 0 : (prev) => prev + 1)
  }
  return (
    <>  
      <div className="slider">
        <div className="sliderContainer" style={{transform : `translateX(-${slider * 100}vw)`}}>
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
        </div>
        <div className="sliderIcons">
          <div className="sliderRows" onClick={handSliderNext}>
            <i className='fas fa-arrow-left'></i>
          </div>
          <div className="sliderRows" onClick={handSliderPrev}>
            <i className='fas fa-arrow-right'></i>
          </div>
        </div>
      </div>

    </>
  )
}

export default Slider