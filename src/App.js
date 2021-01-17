import "./App.css";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import Home from "./Components/Home";
import Nominations from "./Components/NominationList";
import styled from "@emotion/styled/macro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { nominationsSelector } from "./reducers/nominations";

const Container = styled.div`
  max-width: 1040px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function App() {
  const toast = useToast();
  const nominationsList = useSelector(nominationsSelector);
  useEffect(() => {
    if (nominationsList.length === 5)
      toast({
        title: "Your Nominations List is Full!",
        description: "",
        status: "info",
        duration: 7000,
        isClosable: true,
      });
  }, [nominationsList.length, toast]);

  return (
    <ChakraProvider>
      <Container>
        <Router>
          <Link to='/'>Home</Link>

          <Link to='/nominations'>My Nominations</Link>

          <Switch>
            <Route path='/nominations'>
              <Nominations />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ChakraProvider>
  );
}

export default App;
