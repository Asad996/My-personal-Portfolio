import React from 'react';
import HeroSection from './Components/HeroSection';
import SummarySection from './Components/SummarySection';
import CarouselComponent from './Components/CarouselComponent';
import Tools from './Components/Tools';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <SummarySection />
      </section>
      <section id="work">
        <CarouselComponent />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
