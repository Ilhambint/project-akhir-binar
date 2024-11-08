import React, { useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { isLogin } from "./Auth";

const PrivateRoute = ({ element: Element, ...rest }) => {
  return (
    isLogin() ?
      <Element />
      :
      <Navigate to="/login" />
  );
};

export default PrivateRoute;