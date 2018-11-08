import React, { Fragment } from "react";
import { AppBar, Toolbar } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Typography from "@material-ui/core/Typography";

const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="subheading"
          align="center"
          gutterBottom={true}
          color="inherit"
        >
          Headline
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
