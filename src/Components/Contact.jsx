import React from 'react';
import { motion } from 'framer-motion';
import video from "../assets/contact.mp4";

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

const Contact = () => {
  // Animation variants for other elements
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 p-6 text-center">
        {/* Main heading */}
        <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[10rem] 2xl:text-[14rem] font-bold tracking-widest">
          <AnimatedText text="CONTACT" />
        </h1>


        {/* Subtitle and Email link */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="text-white text-sm md:text-lg lg:text-xl mt-8"
        >
          Got a question, proposal, project, or want to work together on something?
          <br />
          <a
            href="mailto:asadabbas235431@gmail.com"
            className="underline text-lg md:text-xl lg:text-2xl mt-4"
          >
            SEND ME AN EMAIL
          </a>
        </motion.p>


        {/* Social Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="flex space-x-8 mt-12"
        >
          <motion.a
            href="https://github.com/Asad996"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white text-lg md:text-xl lg:text-2xl hover:underline"
          >
            GITHUB
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/asad-abbas-ba260a283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white text-lg md:text-xl lg:text-2xl hover:underline"
          >
            LINKEDIN
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
