import React from "react";
import MovieList from "./MovieList";
import SearchForm from "./SearchForm";
import styled from "@emotion/styled/macro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Home = () => {
  return (
    <Container>
      <SearchForm />
      <MovieList />
    </Container>
  );
};

export default Home;
