import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../modules/Home";
import Dashboard from "../modules/Dashboard";

export default function AuthRoute(props) {
  const { isValidUser } = props;
  return (
    <div>
      {isValidUser ? (
        <Route exact path="/home" component={Home} /> 
        || (
          <Route exact path="/dashboard" component={Dashboard} />
        )
      ) : (
        <Redirect to="/landing-page" />
      )}
    </div>
  );
}
