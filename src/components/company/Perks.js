import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { perks } from "../../data/test_data";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import { Grid } from "@material-ui/core";
const styles = theme => ({
  text: {
    fontSize: 12
  },
  title: {
    fontSize: 15,
    fontWeight: 600
  },
  typography: {
    display: "flex",
    fontSize: 10
  },
  userIcon: {
    margin: 9,
    fontSize: 13
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 5d8ae6b7ddaa66cd4521c694b8e9df9c4a7ed7bc
});
const Perks = ({ perk = perks, classes }) => {
  return (
    <Grid
      item
      xs
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid>
        <Typography variant="title" className={classes.title} gutterBottom>
<<<<<<< HEAD
          Qulification
=======
          Perk
>>>>>>> 5d8ae6b7ddaa66cd4521c694b8e9df9c4a7ed7bc
        </Typography>
      </Grid>
      <Grid>
        {perk.map((value, index) => {
          return (
            <Typography variant="caption" className={classes.typography}>
<<<<<<< HEAD
              <FiberManualRecord className={classes.userIcon} color="primary" /> 
=======
              <FiberManualRecord className={classes.userIcon} color="primary" />
>>>>>>> 5d8ae6b7ddaa66cd4521c694b8e9df9c4a7ed7bc
              <p>{value}</p>
            </Typography>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Perks);
