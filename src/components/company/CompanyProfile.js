import React, { Component, Fragment } from "react";
import RolesResponsibilityCard from "./RolesResponsibilityCard";
import CompanyHeader from "./CompanyHeader";
import { Grid } from "@material-ui/core";
import Qualification from "./Qualification";
import WorkCulture from "./WorkCulture";
import Perks from './Perks'

class JobProfile extends Component {
  state = {};
  render() {
    return (
      <Grid container>
        <Grid>
          <CompanyHeader />
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
      </Grid>
    );
  }
}
export default JobProfile;
