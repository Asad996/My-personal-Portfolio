import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaSquareJs, FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';

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
    <div className="bg-black text-white pl-12  pb-12">
      <p className="text-center text-5xl font-bold">TOOLS I'M USING</p>

      {/* FRONTEND SECTION */}
      <div>
        <p className="my-16 text-3xl">FRONTEND</p>
        <motion.div
          className="flex gap-12 text-6xl my-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <FaHtml5 className="hover:border-2 hover:text-orange-700 border-orange-700 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FaCss3 className="hover:border-2 border-blue-500 hover:text-blue-500 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FaReact className="hover:border-2 border-blue-400 hover:text-blue-400 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FaSquareJs className="hover:border-2 border-yellow-500 hover:text-yellow-500 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* BACKEND SECTION */}
      <div>
        <p className="my-16 text-3xl">BACKEND</p>
        <motion.div
          className="flex gap-12 text-6xl my-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <FaNode className="hover:border-2 border-green-700 hover:text-green-700 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SiMongodb className="hover:border-2 border-green-900 hover:text-green-900 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FaSquareJs className="hover:border-2 border-yellow-500 hover:text-yellow-500 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* OTHER SECTION */}
      <div>
        <p className="my-16 text-3xl">OTHER</p>
        <motion.div
          className="flex gap-6 text-5xl my-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <i className="bi bi-github hover:border-2 hover:text-6xl border-white p-2 rounded-lg transition-all duration-100 ease-in-out"></i>
          </motion.div>
          <motion.div variants={itemVariants}>
            <i className="bi bi-git hover:border-2 hover:text-6xl border-white p-2 rounded-lg transition-all duration-100 ease-in-out"></i>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tools;
