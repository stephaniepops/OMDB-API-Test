import "./App.css";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import Home from "./Components/Home";
import Nominations from "./Components/NominationList";
import styled from "@emotion/styled/macro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { nominationsSelector } from "./reducers/nominations";
import Topbar from "./Components/Topbar";

const Container = styled.div`
  max-width: 1040px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  const toast = useToast();
  const nominationsList = useSelector(nominationsSelector);

  useEffect(() => {
    if (nominationsList.length === 5) {
      toast({
        title: "Your Nominations List is Full!",
        description: "",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  }, [nominationsList.length, toast]);

  return (
    <ChakraProvider>
      <Container>
        <Router>
          <Topbar />
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
