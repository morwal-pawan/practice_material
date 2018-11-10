import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import { Contents } from "./components/contents";
import Facilities from "./components/company/Facilities";
import RolesResponsibilityCard from './components/company/RolesResponsibilityCard'
import Reviews from "./components/company/Reviews";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* <Contents /> */}
        {/* <RolesResponsibilityCard /> */}
        <Reviews/>
        <Footer />
      </Fragment>
    );
  }
}
export default App;
