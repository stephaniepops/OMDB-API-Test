import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import MovieListItem from "./MovieListItem";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const AnimatedList = ({ movieListData, variant }) => {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit={{ opacity: 0 }}
    >
      {movieListData.map((movie, index) => (
        <motion.div key={index} variants={item} exit={{ opacity: 0 }}>
          <MovieListItem movie={movie} variant={variant} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedList;
