import React, { Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import Profile from "./Profile"

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

const Contents = props => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="space-between"
      alignItems="center"
    >
       <Grid item xs>
        <Profile styles={styles} />
      </Grid>
    </Grid>
  );
};
export default Contents;
