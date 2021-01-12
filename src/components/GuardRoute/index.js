import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSlector } from "react-redux";

const GuardRoute = ({ children, ...rest }) => {
  let { user } = useSlector((state) => state.auth);
  return <Route {...rest}>{user ? children : <Redirect to="/login" />}</Route>;
};

export default GuardRoute;
