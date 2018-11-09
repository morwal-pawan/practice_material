import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { qualification } from "../../data/test_data";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = theme => ({
  text: {
    fontSize: 12
  }
});

const RolesResponsibility = ({ qualifications = qualification, classes }) => {
  return (
    <Fragment>
      {qualifications.map((value, index) => {
        return (
          <Typography variant="caption" className={classes.text}>
            <FavoriteIcon />
            {value}
          </Typography>
        );
      })}
    </Fragment>
  );
};

export default withStyles(styles)(RolesResponsibility);
