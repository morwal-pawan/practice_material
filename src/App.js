import React, { Component,Fragment } from 'react';
import {Header,Footer}  from './components/layouts';
class App extends Component {
  render(){
    return(
      <Fragment>
      <Header/>
      <Footer/>
      </Fragment>
    )
  }
}
export default App;