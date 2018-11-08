import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';
 
const styles =theme=> ({
  card: {
    minWidth: 275,
    paddingTop: 16,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 16
  },
  cardStyle: {
    paddingTop: 16,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 16
  },
  title: {
    fontSize: 14
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
  media: {
    objectFit: "cover",
     height:60
  }
});

class Profile extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <Grid container spacing={0} alignItems="center" direction="column">
          <Grid container item xs direction="row" justify="space-between">
            <CardContent>
              <Grid item >
                <Typography variant="title">Data Scientist</Typography>
                <Typography variant="subheading">
                  Adbobe India Limited
                </Typography>
                <Typography>Bengluru, IN</Typography>
                <Typography variant="caption">
                 {/*  <Icon className={classNames(classes.icon, 'fa fa-plus-circle')} />  */}
                 Hot job. Expiring in 2 days
                </Typography>
              </Grid>
            </CardContent>
            <CardContent>
              <Grid item>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/210px-Adobe_Systems_logo_and_wordmark.svg.png"
                  title="Company logo"
                />
              </Grid>
            </CardContent>
          </Grid>

          <Divider />
          <Grid item xs>
            Specialities
          </Grid>
        </Grid>
        {/* <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be
            {bull}
            nev
            {bull}o{bull}
            lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    );
  }
}

export default withStyles(styles)(Profile);
