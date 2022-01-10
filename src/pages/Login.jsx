import React from "react";
import Lock from "../components/Lock";
import { Redirect } from "react-router-dom";

const Login = (props) =>
  props?.isAuthenticated ? (
    <Redirect to={{
      pathname: '/private',
    }} />
  ) : (
    <Lock location={props.location} />
  );

export default Login;
