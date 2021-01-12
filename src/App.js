import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import SearchForm from "./Components/SearchForm";
import MovieList from "./Components/MovieList";

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <header className='App-header'>
          <div>
            <SearchForm></SearchForm>
          </div>
          <MovieList></MovieList>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
