import React from "react";
import styled from "@emotion/styled";
import SearchForm from "./SearchForm";
import MovieContainer from "./MovieList";

const HeaderStyle = styled.div``;

const Header = () => {
  return (
    <HeaderStyle>
      <SearchForm />
      <MovieContainer />
    </HeaderStyle>
  );
};

export default Header;
