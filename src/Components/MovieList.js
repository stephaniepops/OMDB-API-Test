import React, { useEffect, useState } from "react";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";
import { searchResultSelector } from "../reducers/searchResults";
import { ADD_NOMINATION } from "./MovieListItem";
import styled from "@emotion/styled/macro";

const MovieList = () => {
  const movieListData = useSelector(searchResultSelector);

  return (
    <div>
      {movieListData &&
        movieListData.map((movie, index) => (
          <MovieListItem key={index} movie={movie} variant={ADD_NOMINATION} />
        ))}
    </div>
  );
};

export default MovieList;
