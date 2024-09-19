import { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from "../assets/Autoparts.png"; // Correct imports
import img2 from "../assets/Borque.png";
import img3 from "../assets/DK.png";
import img4 from "../assets/loja.png";
import img5 from "../assets/TodoList.png";

const Carousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const carouselData = [
    {
      id: 1,
      imageUrl: img1, // Use image directly
      link: "https://autopartr.netlify.app",
      description: "Auto Parts Website",
    },
    {
      id: 2,
      imageUrl: img2,
      link: "https://braroquee.netlify.app",
      description: "Borque Website",
    },
    {
      id: 3,
      imageUrl: img3,
      link: "https://dkrequirement.netlify.app",
      description: "DK Requirement",
    },
    {
      id: 4,
      imageUrl: img4,
      link: "https://lojawebsite.netlify.app",
      description: "Loja Website",
    },
    {
      id: 5,
      imageUrl: img5,
      link: "https://effortless-axolotl-a253e7.netlify.app",
      description: "Todo List",
    },
  ];

  const variants = {
    animate: {
      x: isHovered ? 0 : [-300, 0],  // Moves from right to left when not hovered
      transition: {
        x: { repeat: Infinity, duration: 8, ease: "linear" },
      },
    },
  };

  return (
    <div
      className="overflow-hidden relative bg-gray-100 py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex space-x-6"
        animate={isHovered ? {} : "animate"}
        variants={variants}
      >
        {carouselData.map((item) => (
          <motion.div
            key={item.id}
            className="w-40 h-40 bg-white shadow-lg flex flex-col items-center justify-between p-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.imageUrl}
                alt={item.description}
                className="w-full h-3/4 object-cover mb-2"
              />
              <p className="text-sm text-center">{item.description}</p>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
