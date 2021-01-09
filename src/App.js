import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./app/store";

import "upkit/dist/style.min.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
