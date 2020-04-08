import React from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import LandingPage from "./modules/LandingPage";
import { connect } from "react-redux";
import AuthRoute from "./router/AuthRoute";
import Dashboard from "./modules/Dashboard";

function App(props) {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/landing-page" component={LandingPage} />
          <Route exact path="/dash" component={Dashboard} />
          <AuthRoute isValidUser={props.isValidUser}/>

          <Route
            exact
            path="/"
            render={() => <Redirect to="/landing-page" />}
          ></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = ({ isValidUser }) => {
  return { isValidUser };
};
export default connect(mapStateToProps, null)(App);
