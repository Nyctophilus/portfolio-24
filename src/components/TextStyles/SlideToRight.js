"use client";
import { motion } from "framer-motion";

const SlideToRight = ({ children }) => {
  return children.split("").map((letter, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: index * 0.1,
      }}
    >
      {letter}
    </motion.span>
  ));
};
export default SlideToRight;
