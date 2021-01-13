import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Components/Home";
import Nominations from "./Components/Nominations";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/nominations'>My Nominations</Link>
                </li>
              </ul>
            </nav>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path='/nominations'>
                <Nominations />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
