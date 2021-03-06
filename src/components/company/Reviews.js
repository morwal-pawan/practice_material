import React, { Fragment, Component } from "react";
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
  actions: {
    display: "flex",
    flexDirection: "column"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  },
  expandMoreIcon: {
    fontSize: 16
  },
  readMore: {
    fontSize: 13
  },
  typography: {
    display: "flex",
    fontSize: 10
  },
  userIcon: {
    margin: 9,
    fontSize: 13
  }
});
class Reviews extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { reviews = company_reviews, classes } = this.props;
    return (
      <Grid
        item
        xs
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid>
          <Typography variant="title" className={classes.title} gutterBottom>
            Reviews
          </Typography>
        </Grid>
        <Grid>
          {reviews.map((value, index) => {
            if (index <= 1) {
              return (
                <Typography className={classes.typography} variant="caption">
                  <CheckCircle className={classes.userIcon} color="primary" />
                  <p> {value}</p>
                </Typography>
              );
            }
          })}
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Grid item>
            <p className={classes.readMore}> Other reviews </p>
          </Grid>
          <Grid item>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              label={"Read more"}
            >
              <ExpandMoreIcon className={classes.expandMoreIcon} />
            </IconButton>
          </Grid>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            {reviews.map((value, index) => {
              if (index >= 2) {
                return (
                  <Typography className={classes.typography} variant="caption">
                    <CheckCircle className={classes.userIcon} />
                    <p> {value}</p>
                  </Typography>
                );
              }
            })}
          </Collapse>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Reviews);
