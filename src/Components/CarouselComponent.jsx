// src/components/CarouselComponent.js
import React from 'react';
import Slider from 'react-slick';
import img1 from "../assets/Autoparts.png"; // Correct imports
import img2 from "../assets/Borque.png";
import img3 from "../assets/DK.png";
import img4 from "../assets/loja.png";
import img5 from "../assets/TodoList.png";
const data = [
  { id: 1, title: 'Autoparts', image: img1,  link: "https://autopartr.netlify.app" },
  { id: 2, title: 'Borque', image: img2,    link: "https://braroquee.netlify.app" },
  { id: 3, title: 'DK', image: img3,   link: "https://dkrequirement.netlify.app" },
  { id: 4, title: 'Loja', image: img4,  link: "https://lojawebsite.netlify.app" },
  { id: 5, title: 'TodoList', image: img5,    link: "https://effortless-axolotl-a253e7.netlify.app" },
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
                onClick={() => handleCardClick(item.link)}
                className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4   "
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
              </div>
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
