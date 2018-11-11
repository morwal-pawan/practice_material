import React, { Component, Fragment } from "react";
import CompanyHeader from "./CompanyHeader";
import { Grid } from "@material-ui/core";
import Qualification from "./Qualification";
import WorkCulture from "./WorkCulture";
import Perks from "./Perks";
import RolesResponsibilityCard from "./RolesResponsibilityCard";
import Facilities from "./Facilities";
import Reviews from './Reviews'

class CompanyProfile extends Component {
  state = {};
  render() {
    return (
      <Grid container>
        <Grid>
          <CompanyHeader />
        </Grid>
        <Grid>
          <RolesResponsibilityCard />
        </Grid>
        <Grid>
          <Qualification />
        </Grid>
        <Grid>
          <WorkCulture />
        </Grid>
        <Grid>
          <Perks />
        </Grid>
        <Grid>
          <Facilities />
        </Grid>
        <Grid>
          <Reviews />
        </Grid>
      </Grid>
    );
  }
}
export default CompanyProfile;
