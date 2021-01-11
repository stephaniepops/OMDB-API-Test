import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import SearchForm from "./Components/SearchForm";
import MovieListItem from "./Components/MovieListItem";

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <header className='App-header'>
          <div>
            <SearchForm></SearchForm>
          </div>
          <MovieListItem />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
