import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import { Contents } from "./components/contents";
import CompanyProfile from "./components/company/CompanyProfile";
<<<<<<< HEAD
import {  Route } from "react-router";
=======
import { Route } from "react-router";
>>>>>>> 5d8ae6b7ddaa66cd4521c694b8e9df9c4a7ed7bc

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Route path="/" exact render={props => <Contents {...props} />} />
        <Route
          path="/CompanyProfile"
          exact
          render={props => <CompanyProfile {...props} />}
        />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
