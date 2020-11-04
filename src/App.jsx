import React from "react";
import Homepage from "./components/pages/Homepage";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/parcels/:id"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
