import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { roles_responsibilities } from "../../data/test_data";

const styles = theme => ({});

const RolesResponsibility = ({ responsibilities = roles_responsibilities }) => {
  return (
    <Fragment>
      {responsibilities.map((value, index) => {
        return (
          <Typography variant="caption">
<<<<<<< HEAD
            {index+1}. {value}
=======
            {index}. {value}
>>>>>>> 5d8ae6b7ddaa66cd4521c694b8e9df9c4a7ed7bc
          </Typography>
        );
      })}
    </Fragment>
  );
};

export default withStyles(styles)(RolesResponsibility);
