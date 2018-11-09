import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import red from "@material-ui/core/colors/red";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinearProgresIndicator from "./LinearProgresIndicator";
import ImageAvatars from "./ImageAvatars";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = theme => ({
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
  divider: {
    height: 1,
    margin: 0,
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    width: "inherit"
  },
  title: {
    fontSize: 14
  },
  text: {
    fontSize: 12
  },
  response: {
    fontSize: 8
  },
  skillheading: {
    color: "black",
    display: "contents"
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
  media: {
    objectFit: "cover",
    height: 60
  }
});

class Profile extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <Grid
          container
          spacing={8}
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid container item xs direction="row" justify="space-between">
            <CardContent>
              <Grid item>
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
          <Divider className={classes.divider} />
          <Grid item xs>
            <CardActions className={classes.actions} disableActionSpacing>
              <Typography paragraph>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className={classes.skillheading}
                >
                  Specialities:
                  {`Java,Node.js,Swing,Hibernate,
                  J2EE,Hadoop,Spring...`}
                </Typography>
              </Typography>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
              >
                <Grid item>
                  <p> Read more</p>
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
                    <ExpandMoreIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                </Typography>
              </CardContent>
            </Collapse>
          </Grid>
          <Grid container itme xs direction="column" justify="space-between">
            <Grid item>
              <p> 90% pawan</p>
              <LinearProgresIndicator />
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              spacing={0}
            >
              <Grid>
                <ImageAvatars />
              </Grid>
              <Grid>
                <p className={classes.text}> Postted by : Ramesh Singhak </p>
              </Grid>
              <Grid>
                <Button
                  size="small"
                  className={classes.response}
                  color="primary"
                >
                  <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  Quick response
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(styles)(Profile);
