import React from 'react'
import HeroSection from './Components/HeroSection'
import SummarySection from './Components/SummarySection'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselComponent from './Components/CarouselComponent';


const App = () => {
  return (
    <>
   <HeroSection/>
    <SummarySection/>

  
      <CarouselComponent/>
   
  
    </>
   
  )
}

export default App
