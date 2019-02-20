import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import UploadScreen from './UploadScreen';
import Pastfiles from './Pastfiles';
import LoginScreen from './Loginscreen'
import ButtonAppBar from './AppBar';
import './App.css';

import TweetPanels from './TweetPanels';
import FormDialog from './CreateNewTweet';


class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {draweropen: false,currentScreen:[]};
  }
  componentDidMount(){
    // var currentScreen=[];
    // currentScreen.push(<UploadScreen appContext={this.props.appContext} role={this.props.role}/>);
    // this.setState({currentScreen})
  }
  /**
   * Toggle opening and closing of drawer
   * @param {*} event 
   */ 
  // toggleDrawer(event){
  // // console.log("drawer click");
  // this.setState({draweropen: !this.state.draweropen})
  // }
  // handleMenuClick(event,page){
  //   switch(page){
  //     case "openprint":
  //     // console.log("need to open uploadapge")
  //     var currentScreen=[];
  //     currentScreen.push(<UploadScreen appContext={this.props.appContext} role={this.props.role}/>);
  //     this.setState({currentScreen})
  //     break;
  //     case "openpast":
  //     // console.log("need to open pastfiles")
  //     var currentScreen=[];
  //     currentScreen.push(<Pastfiles appContext={this.props.appContext} role={this.props.role}/>);
  //     this.setState({currentScreen})
  //     break;
  //     case "logout":
  //     var loginPage =[];
  //     loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
  //     this.props.appContext.setState({loginPage:loginPage,uploadScreen:[]})
  //     break;
  //   }
  //   this.setState({draweropen:false})
  // }
  render() {
    return (
      <div>
        <MuiThemeProvider>
        <ButtonAppBar appbartitle= "Tweets" />
        </MuiThemeProvider>
        {/* <MuiThemeProvider> */}
          {/* <Drawer open={this.state.draweropen}>
            <MenuItem>
              <div>
              User Profile
              <a href="#"><FontIcon
                className="material-icons drawerclosebutton"
                color={blue500}
                styles={{ top:10,}}
                onClick={(event) => this.toggleDrawer(event)}
              >clear</FontIcon></a>
              </div>
            </MenuItem>
              <div>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"openprint")}>
                  Printing Page
              </MenuItem>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"openpast")}>
                  Past Files
              </MenuItem>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"logout")}>
                  Logout
              </MenuItem>
              </div> 
          </Drawer> */}
        {/* </MuiThemeProvider> */}
        <div style={{ paddingTop: '25px'}}>
        <MuiThemeProvider> 
        <div className="App" style={{ width: '60vw', margin: 'auto', textAlign: 'left'}}>
        <FormDialog />
        </div>
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div className="App" style={{ width: '60vw', margin: 'auto', paddingTop: '10px'}}>
        <TweetPanels />
        </div>
        </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
