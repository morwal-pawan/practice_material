import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Button from "@material-ui/core/Button";
import BookMark from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  },
  button: {
    margin: theme.spacing.unit,
    width: 38,
    height: 38
  },
  buttonUserIcon: {
    fontSize: 30,
    width: 15
  }
});

const Footer = ({ classes }) => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <IconButton color="secondary">
        <ThumbDown fontSize="medium" />
      </IconButton>
      <IconButton variant="fab" color="primary">
        <BookMark fontSize="medium" />
      </IconButton>
      <IconButton variant="fab" color="primary" >
        <ThumbUp fontSize="medium" />
      </IconButton>
    </Grid>
  );
};
export default withStyles(styles)(Footer);
