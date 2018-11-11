import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { roles_responsibilities } from "../../data/test_data";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React from "react";
import PropTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Grid } from "@material-ui/core";

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
  },
  card: {
    maxWidth: 400,
    height: 100,
    padding: 10
  },
  title: {
    fontSize: 15,
    fontWeight: 600
  },
  roles_responsibility: {
    width: "inherit",
    textAlign: "center",
    paddingTop: 10,
    display: "grid"
  }
});

const RolesResponsibilityCard = ({
  classes,
  responsibilities = roles_responsibilities
}) => {
  return (
    <Grid className={classes.roles_responsibility}>
      <Grid>
        <Typography variant="title" className={classes.title} gutterBottom>
          Front End Developer
        </Typography>
      </Grid>
      <Grid className={classes.root}>
        <GridList cellHeight={150} className={classes.gridList} cols={1.5}>
          {responsibilities.map((value, index) => (
            <GridListTile key={index + 1}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="caption">
                    {index + 1}. {value}
                  </Typography>
                </CardContent>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
};

RolesResponsibilityCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RolesResponsibilityCard);
