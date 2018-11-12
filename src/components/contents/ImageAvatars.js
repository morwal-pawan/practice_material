<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" className={classes.avatar} />
      <Avatar
        alt="Adelle Charles"
        src="/static/images/uxceo-128.jpg"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
=======
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
};

const ImageAvatars = props => {
  const { classes } = props;
  return (
    <div>
      <Avatar className={classNames(classes.avatar, classes.bigAvatar)}>
        RS
      </Avatar>
    </div>
  );
};

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired
>>>>>>> 5d8ae6b7ddaa66cd4521c694b8e9df9c4a7ed7bc
};

export default withStyles(styles)(ImageAvatars);
