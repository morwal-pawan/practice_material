import React, { Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Profile from "./Profile";
import Response from "../layouts/Response";
import {posted_jobs} from '../../data/test_data'

const styles = theme => ({
  Paper: {
    padding: 20
  },
  cardContainer: { position: "relative", height: 331 }
});
const Contents = ({ classes,jobs=posted_jobs }) => {
  return (
    <Grid container>
      <Grid container item spacing={2} className={classes.cardContainer}>
        <Profile cardMarginTop={{ marginTop: 0 }}  post_job={jobs[0]}/>
        <Profile cardMarginTop={{ marginTop: -2 }} />
        <Profile cardMarginTop={{ marginTop: -4 }} />
        <Profile cardMarginTop={{ marginTop: -6 }} />
      </Grid>
      <Response />
      <Grid />
    </Grid>
  );
};
export default withStyles(styles)(Contents);
