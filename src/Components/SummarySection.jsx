import { motion } from 'framer-motion';

const SummarySection = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-8 md:px-14 lg:px-24">
      {/* Main Heading */}
      <motion.p 
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold py-12 sm:py-16 md:py-24"
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        MernStack Developer
      </motion.p>

      {/* First paragraph */}
      <motion.p 
        className="text-base sm:text-lg md:text-xl lg:text-2xl py-4 sm:py-6 md:py-8"
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        I want to learn more about Front-end & Full Stack Development and I have a good command in JavaScript, Next.js, React.js, HTML & CSS. I believe in trying out new things and picking up challenges as it is always great to have knowledge in a variety of subjects and experiences to share. I'm more interested in developing my weaknesses...
      </motion.p>

      {/* Second paragraph */}
      <motion.p 
        className="text-base sm:text-lg md:text-xl lg:text-2xl py-4 sm:py-6 md:py-8"
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }}
      >
        Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world.
      </motion.p>

      {/* Third paragraph */}
      <motion.p 
        className="text-base sm:text-lg md:text-xl lg:text-2xl py-4 sm:py-6 md:py-8"
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.4 }}
      >
        Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations.
      </motion.p>
    </div>
  );
};

export default SummarySection;
