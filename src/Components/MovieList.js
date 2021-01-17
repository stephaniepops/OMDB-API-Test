import React from "react";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";
import { searchResultSelector } from "../reducers/searchResults";
import { ADD_NOMINATION } from "./MovieListItem";
import styled from "@emotion/styled/macro";
import { Text } from "@chakra-ui/react";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 820px;
`;

const MovieList = () => {
  const movieListData = useSelector(searchResultSelector);

  return (
    movieListData.length !== 0 && (
      <MovieContainer>
        <Text fontSize='1.75em' fontWeight='400' alignSelf='flex-start'>
          Movies
        </Text>
        {movieListData.map((movie, index) => (
          <MovieListItem key={index} movie={movie} variant={ADD_NOMINATION} />
        ))}
      </MovieContainer>
    )
  );
};

export default MovieList;
