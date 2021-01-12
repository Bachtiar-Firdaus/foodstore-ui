import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { listen } from "./app/listener";
import "upkit/dist/style.min.css";

import Logout from "./pages/Logout";
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
import GuardRoute from "./components/GuardRoute";
import GuestOnlyRoute from "./components/GuestOnlyRoute";
import Login from "./pages/Login";

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
            <GuardRoute path="/logout">
              <Logout />
            </GuardRoute>
            <GuardRoute path="/pesanan">
              <UserOrders />
            </GuardRoute>
            <GuardRoute path="/account">
              <UserAccount />
            </GuardRoute>
            <GuardRoute path="/invoice/:order_id">
              <Invoice />
            </GuardRoute>
            <GuardRoute path="/checkout">
              <Checkout />
            </GuardRoute>
            <GuardRoute path="/alamat-pengiriman/tambah">
              <UserAddressAdd />
            </GuardRoute>
            <GuardRoute path="/alamat-pengiriman">
              <UserAddress />
            </GuardRoute>
            <GuestOnlyRoute path="/register/berhasil">
              <RegisterSuccess />
            </GuestOnlyRoute>
            <GuestOnlyRoute path="/register">
              <Register />
            </GuestOnlyRoute>
            <GuestOnlyRoute path="/login">
              <Login />
            </GuestOnlyRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
