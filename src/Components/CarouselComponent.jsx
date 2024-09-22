// src/components/CarouselComponent.js
import React from 'react';
import Slider from 'react-slick';
import img1 from "../assets/Autoparts.png"; // Correct imports
import img2 from "../assets/Borque.png";
import img3 from "../assets/DK.png";
import img4 from "../assets/loja.png";
import img5 from "../assets/TodoList.png";
const data = [
  { id: 1, title: 'Autoparts', image: img1,  link: "https://autopartr.netlify.app", github:"https://github.com/Asad996/Auto-part-website.git" },
  { id: 2, title: 'Borque', image: img2,    link: "https://braroquee.netlify.app", github:"https://github.com/Asad996/BAROQUE.git" },
  { id: 3, title: 'DK', image: img3,   link: "https://dkrequirement.netlify.app", github:"https://github.com/Asad996/DK-Website-.git" },
  { id: 4, title: 'Loja', image: img4,  link: "https://lojawebsite.netlify.app", github:"https://github.com/Asad996/LOJA.git" },
  { id: 5, title: 'TodoList', image: img5,    link: "https://effortless-axolotl-a253e7.netlify.app", github:"https://github.com/Asad7922/Crud-Frontend.git" },
];

const CarouselComponent = () => {
  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };

  // Click handler for opening links
  const handleCardClick = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };
  return (
    <>
        <div className='flex justify-center items-center bg-black text-white text-5xl pt-12'>
          <span className='border-white hover:border-2 p-1 cursor-pointer rounded-2xl'>Check out some of my work!</span>
        </div>
      <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-full overflow-hidden cursor-pointer">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-4">
            <div
             
                className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4 bg-[#8080801e] backdrop-blur-lg group hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              
            <p className='text-4xl p-6 '>
            <i onClick={() => handleCardClick(item.github)} className="bi bi-github m-2 bg-white rounded-full px-2 hover:text-5xl transition-all duration-300 ease-in-out"></i>
            <i onClick={() => handleCardClick(item.link)} className="bi bi-link-45deg m-2  bg-white rounded-full px-2 hover:text-5xl transition-all duration-300 ease-in-out"></i>
            </p>
            <div className='flex'>
              <div >
                <p className='text-center text-3xl font-bold text-white'>{item.title}</p>
                <p className='p-6 text-white '>Animated components built with React, Tailwind CSS and Framer Motion with Responsive Design</p>
              </div>
              <div className='pt-20 hover:pt-0 transition-all duration-300 ease-in-out'>
                <img src={item.image} alt={item.id} />
              </div>
            </div>
            <div className="-z-10 absolute inset-0 bg-gradient-to-br from-transparent to-blue-500 opacity-0 group-hover:opacity-50 transition-all duration-300 ease-in-out rounded-2xl"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
        </>
  );
};

export default CarouselComponent;
