import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import { Contents } from "./components/contents";
import WorkCulture from "./components/company/WorkCulture"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* <Contents /> */}
         <WorkCulture/>
        <Footer />
      </Fragment>
    );
  }
}
export default App;
