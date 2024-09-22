import React from 'react'
import HeroSection from './Components/HeroSection'
import SummarySection from './Components/SummarySection'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselComponent from './Components/CarouselComponent';
import Tools from './Components/Tools';


const App = () => {
  return (
    <>
   <HeroSection/>
    <SummarySection/>
      <CarouselComponent/>
      <Tools/>
   
  
    </>
   
  )
}

export default App
