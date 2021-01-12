import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { listen } from "./app/listener";
import "upkit/dist/style.min.css";

import UserOrders from "./pages/UserOrders";
import UserAccount from "./pages/UserAccount";
import Invoice from "./pages/Invoice";
import Checkout from "./pages/Checkout";
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
            <Route path="/pesanan">
              <UserOrders />
            </Route>
            <Route path="/account">
              <UserAccount />
            </Route>
            <Route path="/invoice/:order_id">
              <Invoice />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/alamat-pengiriman/tambah">
              <UserAddressAdd />
            </Route>
            <Route path="/alamat-pengiriman">
              <UserAddress />
            </Route>
            <Route path="/register/berhasil">
              <RegisterSuccess />
            </Route>
            <Route path="/register" component={Register} />
            <Route path="/login" component={login} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
