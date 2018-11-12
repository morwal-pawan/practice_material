import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Profile from "./Profile";
import Response from "../layouts/Response";
import { posted_jobs } from "../../data/test_data";

const styles = theme => ({
  Paper: {
    padding: 20
  },
  cardContainer: { position: "relative", height: 331 }
});
const Contents = ({ classes, jobs = posted_jobs }) => {
  let marginTop = 2;
  return (
    <Grid container>
      <Grid container item spacing={2} className={classes.cardContainer}>
        {jobs.map(job => {
          marginTop = marginTop - 2;
          return (
            <Profile
              cardMarginTop={{ marginTop: marginTop }}
              posted_job={job}
            />
          );
        })}
      </Grid>
      <Response />
      <Grid />
    </Grid>
  );
};
export default withStyles(styles)(Contents);
