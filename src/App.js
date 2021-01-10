import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { listen } from "./app/listener";
import "upkit/dist/style.min.css";

import UserAddressAdd from "./pages/UserAddressAdd";
import UserAddress from "./pages/UserAddress";
import store from "./app/store";
import Home from "./pages/Home";
import Register from "./pages/Register";
import RegisterSuccess from "./pages/RegisterSuccess";
import login from "./pages/Login";
import { getCart } from "./api/cart";

function App() {
  React.useEffect(() => {
    listen();
    getCart();
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
            <Route path="/alamat-pengiriman">
              <UserAddress />
            </Route>
            <Route path="/alamat-pengiriman/tambah">
              <UserAddressAdd />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
