import React, { Component, Fragment } from 'react';
import  RolesResponsibilityCard from './RolesResponsibilityCard'
import CompanyHeader from './CompanyHeader'
import { Grid } from '@material-ui/core';

class JobProfile extends Component {
    state = {  }
    render() { 
        return (
            <Grid container>
            <CompanyHeader/>
            </Grid>
          );
    }
}
export default JobProfile;
