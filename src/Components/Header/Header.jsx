import Email from '../Email/Email';
import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container mx-auto md:flex md:items-center md:justify-between py-5">
            <ul className="flex justify-between text-white gap-10">
                <li>
                    <h3 className="text-xl font-semibold md:ml-5">JANELLE BROWN</h3>
                </li>
                <li className="md:hidden">
                    {/* Apply motion to the menu button */}
                    <motion.button
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.9 }} // Scale down on tap
                        className="text-base font-medium text-white focus:outline-none">
                        {isOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
                    </motion.button>
                </li>
                <li className="hidden md:block text-base font-medium border-b-2">ABOUT</li>
                <li className="hidden md:block text-base font-medium border-transparent border-b-2 hover:border-white">WORK</li>
            </ul>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`md:flex text-center items-center gap-3 ${isOpen ? '' : 'hidden'}`}>
                <ul className="md:hidden text-white flex flex-col gap-4">
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        className="text-base font-medium transition-colors duration-300 hover:text-white hover:border-b-2 hover:border-white mt-4">ABOUT</motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        className="text-base font-medium transition-colors duration-300 hover:text-white hover:border-b-2 hover:border-white mt-4">WORK</motion.li>
                </ul>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="border border-white mt-4"></motion.div>
                <motion.h4
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-white font-medium mt-4">LET'S CONNECT</motion.h4>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex justify-center mt-4"><Email /></motion.div>
            </motion.div>
        </div>
    );
}

export default Header;
