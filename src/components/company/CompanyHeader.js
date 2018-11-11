import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { company_details } from "../../data/test_data";
import Divider from "@material-ui/core/Divider";
import RolesResponsibilityCard from "./RolesResponsibilityCard";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    objectFit: "cover"
  },
  divider: {
    height: 1,
    margin: 0,
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    width: "inherit"
  },
  logo: {
    height: 38,
    padding: 8,
    marginTop: -27,
    backgroundColor: "white"
  },
  title: {
    fontSize: 15,
    fontWeight: 600
  },
  location: {
    fontSize: 10,
    fontWeight: 600
  },
  city: {
    fontWeight: 600
  },
  required_skills: {
    textAlign: "center",
    fontSize: 10
  },
  roles_responsibility: {
    width: "inherit",
    textAlign: "center",
    paddingTop: 10
  }
};

const CompanyHeader = ({ classes, companyDetails = company_details }) => {
  const {
    job_type,
    title_vedio,
    location,
    required_experience,
    required_skills,
    salary,
    company_logo
  } = companyDetails;
  return (
    <Fragment>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <CardMedia
            component="img"
            className={classes.media}
            height="160"
            image={title_vedio}
          />
        </Grid>
        <Grid item>
          <img className={classes.logo} src={company_logo} />
        </Grid>
        <Grid>
          <Typography variant="title" className={classes.title} gutterBottom>
            {job_type}
          </Typography>
        </Grid>
        <Grid>
          <Typography className={classes.location}>
            {location.country}
          </Typography>
          <Typography variant="caption" gutterBottom>
            {location.city}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="caption" className={classes.title} gutterBottom>
            <span>{salary}</span> <span>{required_experience}</span>
          </Typography>
        </Grid>
        <Grid>
          <Typography gutterBottom variant="caption">
            <p className={classes.required_skills}>
              {required_skills.map(skill => {
                return <span>{skill}.</span>;
              })}
            </p>
          </Typography>
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
    </Fragment>
  );
};

CompanyHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompanyHeader);
