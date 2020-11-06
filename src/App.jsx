import React, { useEffect, useState } from "react";
import Homepage from "./components/pages/Homepage";
import {
  Route,
  BrowserRouter as Router,
  Link,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import ResultsPage from "./components/pages/ResultPage";

import info from "./parcels.json";

const App = () => {
  const [parcels, setParcels] = useState([]);

  // const endPoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
  const endPoint = info;

  useEffect(() => {
    setParcels(info);
    // const getData = async () => {
    //   try {
    //     const response = await fetch(endPoint, { mode: "cors" });

    //     const data = await response.json();

    //     setParcels(data);
    //   } catch {
    //     console.log("An error");
    //   }
    // };

    // getData();
  }, []);

  console.log(parcels);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route
            path="/parcels/:parameter"
            render={({ match }) => (
              <ResultsPage
                parcels={parcels}
                parameter={match.params.parameter}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
