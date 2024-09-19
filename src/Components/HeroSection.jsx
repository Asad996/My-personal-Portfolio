import React from 'react';
import { motion } from 'framer-motion';
import video from "../assets/hero.mp4";

// Split text into letters and return an array of motion spans
const AnimatedText = ({ text }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each letter animation
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="text-white">
          {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay text with letter-by-letter animation */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold">
          <AnimatedText text="Hi, I'm Asad Abbas." />
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
