import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import { Contents } from "./components/contents";
import Perks from "./components/company/Perks"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* <Contents /> */}
        <Perks/>
        <Footer />
      </Fragment>
    );
  }
}
export default App;
