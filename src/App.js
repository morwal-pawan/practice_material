import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import { Contents } from "./components/contents";
import RolesResponsibilityCard from "./components/company/RolesResponsibilityCard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* <Contents /> */}
        <RolesResponsibilityCard />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
