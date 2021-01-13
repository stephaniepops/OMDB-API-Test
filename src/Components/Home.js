import React from "react";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
const Home = () => {
  return (
    <div>
      <header className='App-header'>
        <div>
          <SearchForm></SearchForm>
        </div>
        <MovieList></MovieList>
      </header>
    </div>
  );
};

export default Home;
