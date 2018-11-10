import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { workCulture } from "../../data/test_data";

const styles = theme => ({
  root: {
    paddingTop: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: 150
  }
});
const WorkCulture = ({ classes, workCultureImage = workCulture }) => {
  return (
    <div className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList} cols={1.5}>
        {workCultureImage.map(image => (
          <GridListTile key={image}>
            <img src={image} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

workCulture.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WorkCulture);
