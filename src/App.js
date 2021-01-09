import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "upkit/dist/style.min.css";

import store from "./app/store";
import Home from "./pages/Home";

import { listen } from "./app/listener";

React.useEffect(() => {
  listen();
}, []);

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
