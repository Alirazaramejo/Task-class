import React from 'react';
import { motion } from 'framer-motion';

function Text({ text }) {
  // Variants for animation
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className='pt-2 w-full md:w-full py-4 mx-auto text-center'
      initial='hidden'
      animate='visible'
      variants={variants}
    >
      <motion.h2
        className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.h2>
    </motion.div>
  );
}

export default Text;
