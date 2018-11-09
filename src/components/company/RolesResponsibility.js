import React from 'react'
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import {roles_responsibilities} from '../../data/test_data'

const styles = theme => ({});

const RolesResponsibility = ({ responsibilities=roles_responsibilities }) => {
  console.log(responsibilities)
  return (
    <Typography paragraph>
      Add rice and stir very gently to distribute. Top with artichokes and
      peppers, and cook without stirring, until most
    </Typography>
  );
};

export default withStyles(styles)(RolesResponsibility);
