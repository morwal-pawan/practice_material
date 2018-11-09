import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { perks } from "../../data/test_data";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

const styles = theme => ({
  text: {
    fontSize: 16
  }
});
const Perks = ({ perk = perks, classes }) => {
  return (
    <Fragment>
      {perk.map((value, index) => {
        return (
          <Typography variant="caption" className={classes.text}>
            <FiberManualRecord /> {value}
          </Typography>
        );
      })}
    </Fragment>
  );
};

export default withStyles(styles)(Perks);
