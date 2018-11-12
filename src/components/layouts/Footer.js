import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PermIdentity from "@material-ui/icons/PermIdentity";
import NotificationsNone from "@material-ui/icons/NotificationsNone";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import CardTravel from "@material-ui/icons/CardTravel";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  text: {
    fontSize: 9,
    padding: 10
  },
  appBar: {
    display: "grid",
    direction: "row",
    justify: "space-around",
    alignItems: "center"
  }
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="JOBS" className={classes.text} icon={<CardTravel />} />
            <Tab
              label="ACTIVITY"
              className={classes.text}
              icon={<NotificationsNone />}
            />
            <Tab
              label="FEED"
              className={classes.text}
              icon={<InsertDriveFile />}
            />
            <Tab
              label="PROFILE"
              className={classes.text}
              icon={<PermIdentity />}
            />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonForce);
