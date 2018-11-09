import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { qualification } from "../../data/test_data";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Clear from "@material-ui/icons/Clear";

const styles = theme => ({
  text: {
    fontSize: 12
  }
});

const Qualification = ({ qualifications = qualification, classes }) => {
  return (
    <Fragment>
      {qualifications.map((value, index) => {
        return (index +1)% 3 !== 0 ? (
          <Typography variant="caption" className={classes.text}>
            <CheckCircle />
            {value}
          </Typography>
        ) : (
          <Typography variant="caption" className={classes.text}>
            <Clear />
            {value}
          </Typography>
        );
      })}
    </Fragment>
  );
};

export default withStyles(styles)(Qualification);
