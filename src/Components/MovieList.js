import React from "react";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";
import { searchResultSelector } from "../reducers/searchResults";

const MovieList = () => {
  const movieListData = useSelector(searchResultSelector);

  return (
    <div>
      {movieListData &&
        movieListData.map((movie, index) => (
          <MovieListItem key={index} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
