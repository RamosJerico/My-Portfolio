import React from 'react'
import '../styles/Landing.css'
import HeroSection from '../../components/HeroSection'
import HeroSectionLeft from '../../components/HeroSectionLeft'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';
import  Button  from '../../components/Button';

function Landing() {
  return (
    <React.Fragment>
      <div className='landing'>
        <HeroSection {...homeObjOne} />
        <HeroSectionLeft {...homeObjTwo} />
        <HeroSection {...homeObjThree} />
        <HeroSectionLeft {...homeObjFour} />
      </div>
    </React.Fragment>
  )
}
export default Landing