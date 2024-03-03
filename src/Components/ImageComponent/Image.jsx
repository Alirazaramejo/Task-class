import React from 'react';
import { motion } from 'framer-motion';

function Image({ img }) {
    return (
        <div className="text-center">
            <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img src={img} alt="" className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 py-4 mx-auto rounded-[50px]" />
            </motion.div>
        </div>
    );
}

export default Image;
