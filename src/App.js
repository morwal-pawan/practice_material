import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import { Contents } from "./components/contents";
import Facilities from "./components/company/Facilities";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* <Contents /> */}
        <Facilities />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
