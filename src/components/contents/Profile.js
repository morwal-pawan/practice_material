import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import classNames from "classnames";
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
import Button from "@material-ui/core/Button";
import FlasOn from "@material-ui/icons/FlashOn";
import Avatar from "@material-ui/core/Avatar";
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = theme => ({
  card: {
    minWidth: 275,
    paddingTop: 16,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    margin: 10,
    position: "absolute"
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
  readMore: {
    fontSize: 13
  },
  title: {
    fontSize: 14
  },
  text: {
    fontSize: 10
  },
  response: {
    fontSize: 8
  },
  skillheading: {
    color: "black",
    display: "contents"
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: "bold"
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  CompanyName: {
    fontSize: 12,
    fontWeight: "bold"
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
  expandMoreIcon: {
    fontSize: 16
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
  },
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 8
  },
  bigAvatar: {
    width: 36,
    height: 36
  },
  quickResponse: {
    padding: 0,
    paddingRight: 13
  }
});

class Profile extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes, cardMarginTop, posted_job, changeCard } = this.props;
    return (
      <Card className={classNames(classes.card)} style={cardMarginTop}>
        <Grid
          container
          spacing={8}
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <CardActionArea onClick={changeCard} onDoubleClick={changeCard}>
            <Grid container item xs direction="row" justify="space-between">
              <CardContent>
                <Grid item>
                  <Typography variant="title" className={classes.jobTitle}>
                    {posted_job.title}
                  </Typography>
                  <Typography
                    variant="subheading"
                    className={classes.CompanyName}
                  >
                    {posted_job.company_name}
                  </Typography>
                  <Typography className={classes.text}>
                    {" "}
                    {posted_job.location}
                  </Typography>
                  <Typography variant="caption" className={classes.response}>
                    {/*  <Icon className={classNames(classes.icon, 'fa fa-plus-circle')} />  */}
                    {posted_job.expiring}
                  </Typography>
                </Grid>
              </CardContent>
              <CardContent>
                <Grid item>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.media}
                    image={posted_job.company_logo}
                    title="Company logo"
                  />
                </Grid>
              </CardContent>
            </Grid>
          </CardActionArea>
          <Divider className={classes.divider} />
          <Grid item xs>
            <CardActions className={classes.actions} disableActionSpacing>
              <Typography className={classes.text}>
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
                  <p className={classes.readMore}> Read more</p>
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
              <p className={classes.response}> 90% Profile match</p>
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
                <Avatar
                  className={classNames(classes.avatar, classes.bigAvatar)}
                >
                  {posted_job.posted_by.nick_name}
                </Avatar>
              </Grid>
              <Grid>
                <p className={classes.text}>
                  {" "}
                  Postted by : {posted_job.posted_by.name}{" "}
                </p>
              </Grid>
              <Grid className={classes.quickResponse}>
                <Button
                  size="small"
                  className={classes.response}
                  color="primary"
                >
                  <FlasOn />
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
