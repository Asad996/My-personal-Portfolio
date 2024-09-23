// src/components/CarouselComponent.js
import React from 'react';
import Slider from 'react-slick';
import img1 from "../assets/Autoparts.png"; // Correct imports
import img2 from "../assets/Borque.png";
import img3 from "../assets/DK.png";
import img4 from "../assets/loja.png";
import img5 from "../assets/TodoList.png";

const data = [
  { id: 1, title: 'Autoparts', image: img1, link: "https://autopartr.netlify.app", github: "https://github.com/Asad996/Auto-part-website.git" },
  { id: 2, title: 'Borque', image: img2, link: "https://braroquee.netlify.app", github: "https://github.com/Asad996/BAROQUE.git" },
  { id: 3, title: 'DK', image: img3, link: "https://dkrequirement.netlify.app", github: "https://github.com/Asad996/DK-Website-.git" },
  { id: 4, title: 'Loja', image: img4, link: "https://lojawebsite.netlify.app", github: "https://github.com/Asad996/LOJA.git" },
  { id: 5, title: 'TodoList', image: img5, link: "https://effortless-axolotl-a253e7.netlify.app", github: "https://github.com/Asad7922/Crud-Frontend.git" },
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
      <div className="flex justify-center items-center bg-black text-white py-12">
        <span className="border-white hover:border-2 p-1 cursor-pointer rounded-2xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Check out some of my work!
        </span>
      </div>


      {/* Mobile layout (flex column) */}
      <div className="md:hidden bg-black flex flex-col items-center space-y-8 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-11/12 p-4 rounded-2xl overflow-hidden shadow-lg border-4 bg-[#8080801e] backdrop-blur-lg group transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center">
              <div className="flex justify-center text-4xl mb-4">
                <i onClick={() => handleCardClick(item.github)} className="bi bi-github m-2 bg-white rounded-full px-2 hover:text-5xl transition-all duration-300 ease-in-out"></i>
                <i onClick={() => handleCardClick(item.link)} className="bi bi-link-45deg m-2 bg-white rounded-full px-2 hover:text-5xl transition-all duration-300 ease-in-out"></i>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center text-3xl font-bold text-white">{item.title}</p>
                <p className="p-6 text-white text-center">
                  Animated components built with React, Tailwind CSS and Framer Motion with Responsive Design
                </p>
                <img className="w-2/3 mt-4" src={item.image} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop and Tablet layout (carousel) */}
      <div className="hidden md:block min-h-screen bg-black flex items-center justify-center">
        <div className="w-full overflow-hidden cursor-pointer">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} className="p-4">
                <div
                  className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4 bg-[#8080801e] backdrop-blur-lg group hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  <div className="flex justify-center text-4xl p-6">
                    <i onClick={() => handleCardClick(item.github)} className="bi bi-github m-2 bg-white rounded-full px-2 hover:text-5xl transition-all duration-300 ease-in-out"></i>
                    <i onClick={() => handleCardClick(item.link)} className="bi bi-link-45deg m-2 bg-white rounded-full px-2 hover:text-5xl transition-all duration-300 ease-in-out"></i>
                  </div>
                  <div className="flex">
                    <div>
                      <p className="text-center text-3xl font-bold text-white">{item.title}</p>
                      <p className="p-6 text-white">Animated components built with React, Tailwind CSS and Framer Motion with Responsive Design</p>
                    </div>
                    <div className="pt-20 hover:pt-0 transition-all duration-300 ease-in-out">
                      <img src={item.image} alt={item.title} />
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
