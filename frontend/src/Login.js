import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/core/AppBar';
import Button from 'material-ui/core/Button';
import TextField from 'material-ui/core/TextField';
import Menu from 'material-ui/core/Menu';
import MenuItem from 'material-ui/MenuItem';
var apiBaseUrl = "http://localhost:5000/api/";
import axios from 'axios';
import UploadPage from './UploadPage';
import AppBar from './AppBar';


class Login extends Component {
  constructor(props){
    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider >
        <div >
         <TextField
           hintText="Enter your User Name"
           floatingLabelText="User Name"
           onChange = {(event,newValue)=>this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <Button color="black" label="Submit" backgroundColor="cornflowerblue" labelColor="white" style={style} onClick={(event) => this.handleClick(event)}/>
       </div>
       </MuiThemeProvider>
    )
    this.state={
      username:'',
      password:'',
      menuValue:1,
      loginComponent:localloginComponent,
      loginRole:'user'
    }
  }
  componentWillMount(){
  // console.log("willmount prop values",this.props);
  if(this.props.role != undefined){
    if(this.props.role == 'user'){
      console.log("in user componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your User Id"
             floatingLabelText="User Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button label="Submit" backgroundColor="cornflowerblue" labelColor="white" style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
      this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'user'})
    }
    else if(this.props.role == 'admin'){
      console.log("in admin componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Admin Id"
             floatingLabelText="Admin Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button label="Submit" backgroundColor="cornflowerblue" labelColor="white" style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
      this.setState({menuValue:2,loginComponent:localloginComponent,loginRole:'admin'})
    }
  }
  }
  handleClick(event){
    var self = this;
    // var payload={
    //   "userid":this.state.username,
	  //   "password":this.state.password,
    //   "role":this.state.loginRole
    // }
    var userid = this.state.username
    var password = this.state.password
    axios.get(apiBaseUrl+`validate?userid=${userid}&password=${password}`, )
   .then(function (response) {
     console.log(response);
     console.log(response.data)
     if(response.data == "success"){
       console.log("Login successful");
       var uploadScreen=[];
       uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
       self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
     }
     else if(response.data =="password error"){
       console.log("Username password does not match");
       alert('Password Invalid, Please Try Again.')
     }
     else{
       console.log("Username does not exists");
       alert("Username does not exist");
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  handleMenuChange(value){
    console.log("menuvalue",value);
    var loginRole;
    if(value==1){
      var localloginComponent=[];
      loginRole='user';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter you User Id"
             floatingLabelText="User Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button label="Submit" backgroundColor="cornflowerblue" labelColor="white" style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
    }
    else if(value == 2){
      var localloginComponent=[];
      loginRole='admin';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Admin Id"
             floatingLabelText="Admin Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button label="Submit" backgroundColor="cornflowerblue" labelColor="white" style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
    }
    this.setState({menuValue:value,
                   loginComponent:localloginComponent,
                   loginRole:loginRole})
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
        <AppBar appbartitle= "Login" />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div style= {{paddingRight: '5px'}}>
          <div>
          <p>Login as:</p>
          </div>
        <Menu value={this.state.menuValue} style = {{paddingLeft:'18px'}} onChange={(event,index,value)=>this.handleMenuChange(value)}>
          <MenuItem value={1} primaryText="User" />
          <MenuItem value={2} primaryText="Admin" />
        </Menu>
        </div>
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
  backgroundColor: '#6495ed'
};

export default Login;
