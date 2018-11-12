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
            {index}. {value}
          </Typography>
        );
      })}
    </Fragment>
  );
};

export default withStyles(styles)(RolesResponsibility);
