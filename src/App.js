import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import { Contents } from "./components/contents";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Contents />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
