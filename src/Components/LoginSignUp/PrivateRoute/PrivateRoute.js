import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./../../../Hooks/useAuth";
import loadergif from "../../../assets/img/loader.gif";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation()

  if (loading) {
    return (
      <div className="loader-container" role="status">
        <img src={loadergif} alt="" />
      </div>
    );
  }

  return user.email ? children : <Navigate to="/login" state={{from: location}} replace/>;
};

export default PrivateRoute;
