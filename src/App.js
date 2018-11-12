import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import { Contents } from "./components/contents";
import Facilities from "./components/company/Facilities";
import RolesResponsibilityCard from './components/company/RolesResponsibilityCard'
import Reviews from "./components/company/Reviews";
import CompanyProfile from './components/company/CompanyProfile'
import WorkCulture from './components/company/WorkCulture'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* <Contents /> */}
        <CompanyProfile />

        <Footer />
      </Fragment>
    );
  }
}
export default App;
