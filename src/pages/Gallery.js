import React from 'react'
import './styles/Gallery.css'
import ImageSlider from '../components/ImageSlider';
import ImageSliderTwo from '../components/ImageSliderTwo';
import { CollegeFriends, SliderData } from '../components/SliderData';

function Gallery() {
  return (
    <React.Fragment>
        <div className='gallery'>
            <div className='gallery-container'>
              <div className='slider-container'>
                <h1 className='gallery-item'>KND (Kids Next Door) and Peeps</h1>
                  <p className='gallery-item'>A life worth living with this people. A part of me I could also call "HOME"</p>
                  <p className='gallery-item'>This are the people who I have been with since the start of most of my life.</p>
                  <p className='gallery-item'>The people who I have been with through ups and downs, the days where they have also experienced the darkest hours of me.</p>
                  <ImageSlider slides={SliderData} />
              </div>
              <div className='slider-container'>
                <h1 className='gallery-item'>College Friends</h1>
                  <p className='gallery-item'>The people who suffered and went through the same hardships and challenges studying</p>
                  <p className='gallery-item'>To the class of BSCS 4A goodluck to you all!</p>
                  <ImageSliderTwo slides={CollegeFriends} />
              </div>
            </div>
        </div>
    </React.Fragment>
  )
}
export default Gallery