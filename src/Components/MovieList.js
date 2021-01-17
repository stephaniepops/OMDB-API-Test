import React from "react";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";
import { searchResultSelector } from "../reducers/searchResults";
import { ADD_NOMINATION } from "./MovieListItem";
import styled from "@emotion/styled/macro";
import { Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 820px;
  width: 100vw;
`;
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

const MovieList = () => {
  const movieListData = useSelector(searchResultSelector);

  return (
    <MovieContainer>
      <Text fontSize='1.75em' fontWeight='400' alignSelf='flex-start'>
        Movies
      </Text>
      {movieListData.length !== 0 ? (
        <AnimatePresence>
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            exit={{ opacity: 0 }}
          >
            {movieListData.map((movie, index) => (
              <motion.div variants={item} exit={{ opacity: 0 }}>
                <MovieListItem
                  key={index}
                  movie={movie}
                  variant={ADD_NOMINATION}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      ) : (
        <Text>Try Searching for your favourite movie!</Text>
      )}
    </MovieContainer>
  );
};

export default MovieList;
