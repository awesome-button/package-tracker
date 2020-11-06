import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import ResultsPage from "./components/pages/ResultPage";

const App = () => {
  const [parcels, setParcels] = useState([]);

  const endPoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(endPoint, { mode: "cors" });

        const data = await response.json();

        setParcels(data);
      } catch {
        console.log(
          "An error while fetching information from the server. Please try again later"
        );
      }
    };

    getData();
  }, []);

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
