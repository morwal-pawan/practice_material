import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import { Contents } from "./components/contents";
import Qualification from "./components/company/Qualification"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* <Contents /> */}
        <Qualification/>
        <Footer />
      </Fragment>
    );
  }
}
export default App;
