import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import { Contents } from "./components/contents";
import CompanyProfile from "./components/company/CompanyProfile";
import { Route } from "react-router";

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
