import React, { useState } from 'react'
import './styles/ImageSlider.css'
import {CollegeFriends} from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { IconContext } from 'react-icons';

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <IconContext.Provider value={{color:'#fff'}}>
            <section className='slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}  />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}  />
                {CollegeFriends.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} alt='this image' className='image' />)}
                        </div>
                    ) 
                })}
            </section>
        </IconContext.Provider>
        
  );
};

export default ImageSlider;