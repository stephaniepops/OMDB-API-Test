import React from "react";
import styled from "@emotion/styled";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";

const HeaderStyle = styled.div``;

const Header = () => {
  return (
    <HeaderStyle>
      <SearchForm />
      <MovieList />
    </HeaderStyle>
  );
};

export default Header;
