import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaSquareJs, FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';
import './Tools.css'; // or './styles.css'

const Tools = () => {
  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="bg-black text-white pl-12 pb-12">
        <p className="text-center text-5xl font-bold">TOOLS I'M USING</p>

        {/* FRONTEND SECTION */}
        <div>
          <p className="my-16 text-3xl">FRONTEND</p>
          <motion.div
            className="flex gap-12 text-6xl my-6 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* HTML Icon with Tooltip */}
            <motion.div variants={itemVariants} className="group relative flex flex-col items-center">
              <FaHtml5 className="text-orange-700 hover:text-orange-800 transition-all duration-300 ease-in-out" />
              <span className="tooltip bg-orange-700">HTML5</span>
            </motion.div>

            {/* CSS Icon with Tooltip */}
            <motion.div variants={itemVariants} className="group relative flex flex-col items-center">
              <FaCss3 className="text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out" />
              <span className="tooltip bg-blue-500">CSS3</span>
            </motion.div>

            {/* React Icon with Tooltip */}
            <motion.div variants={itemVariants} className="group relative flex flex-col items-center">
              <FaReact className="text-blue-400 hover:text-blue-500 transition-all duration-300 ease-in-out" />
              <span className="tooltip bg-blue-400">React</span>
            </motion.div>

            {/* JavaScript Icon with Tooltip */}
            <motion.div variants={itemVariants} className="group relative flex flex-col items-center">
              <FaSquareJs className="text-yellow-500 hover:text-yellow-600 transition-all duration-300 ease-in-out" />
              <span className="tooltip bg-yellow-500">JavaScript</span>
            </motion.div>
          </motion.div>
        </div>

        {/* BACKEND SECTION */}
        <div>
          <p className="my-16 text-3xl">BACKEND</p>
          <motion.div
            className="flex gap-12 text-6xl my-6 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Node.js Icon with Tooltip */}
            <motion.div variants={itemVariants} className="group relative flex flex-col items-center">
              <FaNode className="text-green-700 hover:text-green-800 transition-all duration-300 ease-in-out" />
              <span className="tooltip bg-green-700">Node.js</span>
            </motion.div>

            {/* MongoDB Icon with Tooltip */}
            <motion.div variants={itemVariants} className="group relative flex flex-col items-center">
              <SiMongodb className="text-green-900 hover:text-green-1000 transition-all duration-300 ease-in-out" />
              <span className="tooltip bg-green-900">MongoDB</span>
            </motion.div>

            {/* JavaScript Icon with Tooltip */}
            <motion.div variants={itemVariants} className="group relative flex flex-col items-center">
              <FaSquareJs className="text-yellow-500 hover:text-yellow-600 transition-all duration-300 ease-in-out" />
              <span className="tooltip bg-yellow-500">JavaScript</span>
            </motion.div>
          </motion.div>
        </div>

        {/* OTHER SECTION */}
        <div>
          <p className="my-16 text-3xl">OTHER</p>
          <motion.div
            className="flex gap-6 text-5xl my-6 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* GitHub Icon with Tooltip */}
            <motion.div variants={itemVariants} className="group relative flex flex-col items-center">
              <i className="bi bi-github text-white hover:text-gray-400 transition-all duration-300 ease-in-out"></i>
              <span className="tooltip">GitHub</span>
            </motion.div>

            {/* Git Icon with Tooltip */}
            <motion.div variants={itemVariants} className="group relative flex flex-col items-center">
              <i className="bi bi-git text-orange-700 hover:text-orange-800 transition-all duration-300 ease-in-out"></i>
              <span className="tooltip bg-orange-700">Git</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    </>
  );
};

export default Tools;
