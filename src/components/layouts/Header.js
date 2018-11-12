import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import red from "@material-ui/core/colors/red";
import Settings from "@material-ui/icons/Settings";
import BookMark from "@material-ui/icons/Bookmark";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 100,
   
  },
  appBar:{
    boxShadow: "none",
    backgroundColor:'white'
  },
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  },
  title: {
    fontSize: 15,
    fontWeight: 600
  },
  text: {
    fontSize: 12
  },
  icon: {
    margin: theme.spacing.unit * 2
  },

  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  },
  typography: {
    display: "flex",
    fontSize: 10
  }
});

const Header = ({ classes }) => {
  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Typography variant="h6" color="inherit">
          04 Jobs for you
        </Typography>
        <IconButton color="secondary" className={classes.button}>
          <Settings fontSize="medium" />
        </IconButton>
        <IconButton color="secondary" className={classes.button}>
          <Badge className={classes.margin} badgeContent={4} color="primary">
            <BookMark />
          </Badge>
        </IconButton>
      </Grid>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
