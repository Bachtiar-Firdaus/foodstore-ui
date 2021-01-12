import * as React from "react";
import { useSlector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function GuestOnlyRoute({ children, ...rest }) {
  let { user } = useSelector((state) => state.auth);
  return <Route {...rest}>{!user ? children : <Redirect to="/" />}</Route>;
}
