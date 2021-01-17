import React from "react";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";
import { searchResultSelector } from "../reducers/searchResults";
import { ADD_NOMINATION } from "./MovieListItem";
import styled from "@emotion/styled/macro";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieList = () => {
  const movieListData = useSelector(searchResultSelector);

  return (
    <MovieContainer>
      {movieListData &&
        movieListData.map((movie, index) => (
          <MovieListItem key={index} movie={movie} variant={ADD_NOMINATION} />
        ))}
    </MovieContainer>
  );
};

export default MovieList;
