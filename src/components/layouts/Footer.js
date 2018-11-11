import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import classnames from "classnames";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { company_reviews } from "../../data/test_data";
import red from "@material-ui/core/colors/red";
import CheckCircle from "@material-ui/icons/CheckCircle";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Button from "@material-ui/core/Button";
import BookMark from "@material-ui/icons/Bookmark";

const styles = theme => ({
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
  },
  userIcon: {
    margin: 9,
    fontSize: 13
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
      <Button variant="fab" color="primary" className={classes.button}>
        <ThumbDown className={classes.buttonUserIcon} />
      </Button>
      <Button variant="fab" color="primary" className={classes.button}>
        <BookMark className={classes.buttonUserIcon} />
      </Button>
      <Button variant="fab" color="primary" className={classes.button}>
        <ThumbUp className={classes.buttonUserIcon} />
      </Button>
    </Grid>
    // <Tabs
    // indicatorColor="primary"
    // textColor="primary"
    // >
    //   {/* <Tab
    //     icon={<FontIcon className="material-icons">phone</FontIcon>}
    //     label="RECENTS"
    //   /> */}
    //   <Tab icon={<Phone />} label="RECENTS" />
    //   <Tab icon={<Alarm />} label="ACTIVITY" />
    //   <Tab icon={<Favorite />} label="FAVORITES" />
    //   <Tab icon={<MapsPersonPin />} label="NEARBY" />
    // </Tabs>
  );
};
export default withStyles(styles)(Footer);
