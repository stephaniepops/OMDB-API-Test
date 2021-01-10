import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import SearchForm from "./Components/SearchForm";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <div className="App">
          <header className="App-header">
            <div>
              <SearchForm></SearchForm>
            </div>
          </header>
        </div>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
