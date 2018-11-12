import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  linearColorPrimary: {
    backgroundColor: "rgba(0, 0, 0, 0.15)"
  },
  linearBarColorPrimary: {
    backgroundColor: "#21b12e"
  }
});

const LinearDeterminate = ({ completed = 70, classes }) => {
  return (
    <LinearProgress
      variant="determinate"
      className={classes.root}
      value={completed}
      classes={{
        colorPrimary: classes.linearColorPrimary,
        barColorPrimary: classes.linearBarColorPrimary
      }}
    />
  );
};
LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LinearDeterminate);
