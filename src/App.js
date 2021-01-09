import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { listen } from "./app/listener";
import "upkit/dist/style.min.css";

import store from "./app/store";
import Home from "./pages/Home";
import Register from "./pages/Register";
import RegisterSuccess from "./pages/RegisterSuccess";
import login from "./pages/Login";

function App() {
  React.useEffect(() => {
    listen();
  }, []);
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/register/berhasil">
              <RegisterSuccess />
            </Route>
            <Route path="/login" component={login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
