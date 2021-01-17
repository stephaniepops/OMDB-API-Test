import React from "react";
import { useSelector } from "react-redux";
import { searchResultSelector } from "../reducers/searchResults";
import { ADD_NOMINATION } from "./MovieListItem";
import styled from "@emotion/styled/macro";
import { Text } from "@chakra-ui/react";
import AnimatedList from "./AnimatedList";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 820px;
  width: 100%;
`;
const MovieList = () => {
  const movieListData = useSelector(searchResultSelector);

  return (
    <MovieContainer>
      <Text fontSize='1.75em' fontWeight='400' alignSelf='flex-start'>
        Movies
      </Text>
      {movieListData.length !== 0 ? (
        <AnimatedList movieListData={movieListData} variant={ADD_NOMINATION} />
      ) : (
        <Text>Try Searching for your favourite movie!</Text>
      )}
    </MovieContainer>
  );
};

export default MovieList;
