import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Profile from "./Profile";
import Response from "../layouts/Response";
import { posted_jobs } from "../../data/test_data";

const styles = theme => ({
  Paper: {
    padding: 20
  },
  cardContainer: { position: "relative", height: 331 }
});
class Contents extends Component {
  state = { posted_jobs: posted_jobs };
  handleChangeChad = () => {
    let jobs = this.state.posted_jobs;
    jobs.unshift(jobs.pop());
    this.setState({ posted_jobs: jobs });
  };
  render() {
    const { classes } = this.props;
    const { posted_jobs } = this.state;
    let marginTop = 2;
    return (
      <Grid container>
        <Grid container item spacing={2} className={classes.cardContainer}>
          {posted_jobs.map(job => {
            marginTop = marginTop - 2;
            return (
              <Profile
                cardMarginTop={{ marginTop: marginTop }}
                posted_job={job}
                changeCard={this.handleChangeChad}
              />
            );
          })}
        </Grid>
        <Response />
        <Grid />
      </Grid>
    );
  }
}
export default withStyles(styles)(Contents);
