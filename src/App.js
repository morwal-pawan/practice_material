import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import { Contents } from "./components/contents";
import JobProfile from "./components/company/JobProfile"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* <Contents /> */}
        <JobProfile/>
        <Footer />
      </Fragment>
    );
  }
}
export default App;
