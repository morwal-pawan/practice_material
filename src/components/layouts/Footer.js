import React, { Fragment } from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import FontIcon from "material-ui/FontIcon";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Phone from "material-ui/svg-icons/communication/phone";
import MapsPersonPin from "material-ui/svg-icons/maps/person-pin";
import Alarm from "material-ui/svg-icons/action/alarm";
import Favorite from "material-ui/svg-icons/action/favorite";
import Icon from "@material-ui/core/Icon";

const Footer = props => {
  return (
    
      <Tabs
      indicatorColor="primary"
      textColor="primary"
      >
        {/* <Tab
          icon={<FontIcon className="material-icons">phone</FontIcon>}
          label="RECENTS"
        /> */}
        <Tab icon={<Phone />} label="RECENTS" />
        <Tab icon={<Alarm />} label="ACTIVITY" />
        <Tab icon={<Favorite />} label="FAVORITES" />
        <Tab icon={<MapsPersonPin />} label="NEARBY" />
      </Tabs>
    
  );
};
export default Footer;
