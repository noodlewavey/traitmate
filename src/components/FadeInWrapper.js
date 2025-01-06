import React from 'react';
import { motion } from 'framer-motion';

const FadeInWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with fully transparent
      animate={{ opacity: 1 }} // Fade to fully visible
      transition={{ duration: 0.6 }} // Duration of the animation
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
