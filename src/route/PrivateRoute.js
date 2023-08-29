import React from "react";
import ProductDetail from "../Components/ProductDetail";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";
const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login/" />;
};

export default PrivateRoute;
