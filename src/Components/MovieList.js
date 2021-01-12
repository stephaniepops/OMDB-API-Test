import React from "react";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";
import { searchResultSelector } from "../reducers/searchResults";

const MovieList = () => {
  const movieListData = useSelector(searchResultSelector);

  return (
    <div>
      {movieListData.map(({ Title, Year, Poster }, index) => (
        <MovieListItem
          key={index}
          title={Title}
          year={Year}
          posterURL={Poster}
        />
      ))}
    </div>
  );
};

export default MovieList;
