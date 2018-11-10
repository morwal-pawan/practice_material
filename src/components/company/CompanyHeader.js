import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    objectFit: "cover"
  },
  logo: {
    height:38,
    padding: 8,
    marginTop:-25,
    backgroundColor:'white'
  }
};

function CompanyHeader(props) {
  const { classes } = props;
  return (
    <Fragment>
      <Card className={classes.card}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <CardMedia
              component="img"
              className={classes.media}
              height="160"
              image="https://techcrunch.com/wp-content/uploads/2015/11/284973.jpg?w=730&crop=1"
            />
          </Grid>
          <Grid item>
            <img
              className={classes.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/210px-Adobe_Systems_logo_and_wordmark.svg.png"
            />
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
}

CompanyHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompanyHeader);
