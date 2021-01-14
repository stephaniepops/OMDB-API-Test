import React from "react";
import styled from "@emotion/styled";
import Home from "./Home";
import Nominations from "./NominationList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";

const HeaderStyle = styled.div`
  background-color: blue;
`;

const Header = () => {
  return (
    <div>
      <SearchForm />
      <MovieList />
    </div>
  );
};

export default Header;
