import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { company_details } from "../../data/test_data";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    objectFit: "cover"
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
      <Card className={classes.card}>
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
            <img
              className={classes.logo}
              src={company_logo}
            />
          </Grid>
          <Grid>
            <Typography variant="title" className={classes.title} gutterBottom>
             {job_type}
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.location}>{location.country}</Typography>
            <Typography variant="caption" gutterBottom>
            {location.city}
            </Typography>
          </Grid>
        </Grid>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

CompanyHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompanyHeader);
