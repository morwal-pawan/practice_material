import React, { Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Profile from "./Profile";

const styles = theme => ({
  Paper: {
    padding: 20
  },
  cardContainer: { position: "relative", height: 331 }
});
const Contents = ({ classes }) => {
  return (
    <Grid container spacing={2} className={classes.cardContainer}>
      <Profile cardMarginTop={{ marginTop: 0 }} />
      <Profile cardMarginTop={{ marginTop: -2 }} />
      <Profile cardMarginTop={{ marginTop: -4 }} />
       <Profile cardMarginTop={{ marginTop: -6 }} />
    </Grid>
  );
};
export default withStyles(styles)(Contents);
