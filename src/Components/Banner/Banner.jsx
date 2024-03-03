import React from 'react';
import { motion } from 'framer-motion';

function Banner() {
  return (
    <motion.div
      className='h-[80vh] flex flex-col items-center justify-center'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-white text-5xl md:text-6xl lg:text-8xl text-center font-bold leading-none">SENIOR
        <br /> EXPERIENCE
        <br />
        DESIGNER©
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-between w-full md:w-1/2 items-center mt-5 md:mt-8">
        <h4 className="text-white text-base md:text-lg lg:text-xl font-medium text-center md:text-left">
          CURRENTLY CRAFTING <br /> EXPERIENCES AT CROSBY
        </h4>
        <h4 className="text-white text-base md:text-lg lg:text-xl font-medium">(2021 – PRESENT)</h4>
      </div>
    </motion.div>
  );
}

export default Banner;
