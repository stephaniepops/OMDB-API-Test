import React from "react";
import styled from "@emotion/styled";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";

const HeaderStyle = styled.div``;

const Logo = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Logo
        src={process.env.PUBLIC_URL + "ShoppiesLogo.png"}
        alt='shoppies logo'
      />
      <SearchForm />
      <MovieList />
    </HeaderStyle>
  );
};

export default Header;
