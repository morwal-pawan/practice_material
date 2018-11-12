import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { workCulture } from "../../data/test_data";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    paddingTop: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  image: {
    height: 100
  },
  title: {
    fontSize: 15,
    fontWeight: 600
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: 116
  }
});
const WorkCulture = ({ classes, workCultureImage = workCulture }) => {
  return (
    <Grid
      xs
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid>
        <Typography variant="title" className={classes.title} gutterBottom>
          Work Culture /Team
        </Typography>
      </Grid>
      <Grid className={classes.root}>
        <GridList cellHeight={150} className={classes.gridList} cols={1.5}>
          {workCultureImage.map(image => (
            <img src={image} style={{ height: 100 }} />
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
};

workCulture.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WorkCulture);
