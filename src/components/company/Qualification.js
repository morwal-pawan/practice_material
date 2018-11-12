import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { qualification } from "../../data/test_data";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Clear from "@material-ui/icons/Clear";
import { Grid } from "@material-ui/core";
<<<<<<< HEAD
import Response from '../layouts/Response'
=======
>>>>>>> 5d8ae6b7ddaa66cd4521c694b8e9df9c4a7ed7bc

const styles = theme => ({
  text: {
    fontSize: 12
  },
  typography: {
    display: "flex",
    fontSize: 10
  },
  userIcon: {
    margin: 9,
    fontSize: 13
  },
  title: {
    fontSize: 15,
    fontWeight: 600
  },
  match: {
    fontSize: 10,
    marginTop: -14
  },
  rating: {
    background: "#33cfe1",
    fontSize: 16,
    padding: 3
  }
});

const Qualification = ({ qualifications = qualification, classes }) => {
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
        <Typography variant="title" gutterBottom>
          <p className={classes.title}>Qulification</p>
          <p className={classes.match}>
            Your Match :<span className={classes.rating}>4/5</span>
          </p>
        </Typography>
      </Grid>
      <Grid>
        {qualifications.map((value, index) => {
          return (index + 1) % 2 !== 0 ? (
            <Typography className={classes.typography} variant="caption">
              <CheckCircle className={classes.userIcon} color="primary" />
              <p> {value}</p>
            </Typography>
          ) : (
            <Typography variant="caption" className={classes.typography}>
              <Clear className={classes.userIcon} color="primary" />
              <p>{value}</p>
            </Typography>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Qualification);
