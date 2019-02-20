import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonAppBar from './AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      user_id:'',
      password:''
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
  handleClick(event,role){
    var apiBaseUrl = "http://localhost:5000/api/";
    // console.log("values in register handler",role);
    var self = this;
    //To be done:check for empty values before hitting submit

    console.log(this.state.user_id, this.state.password, role)
    if(this.state.user_id.length>0 && this.state.password.length>0){
      var payload={
      "userid" : this.state.user_id,
      "password" :this.state.password,
      "user_type" :role
      }
      console.log(payload)
      var userid = this.state.user_id
      var password = this.state.password
      var user_type = role
      // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

      // axios.post(apiBaseUrl+`createquery?userid=${userid}&password=${password}&user_type=${user_type}`, {proxy: {
      //   host: '127.0.0.1',
      //   port: 5000,}})
      axios.post(apiBaseUrl+'create', payload, {proxy: {
        host: '127.0.0.1',
        port: 5000}})
     .then(function (response) {
       console.log(response);
       if(response.data.code === 200){
        //  console.log("registration successfull");
         var loginscreen=[];
         loginscreen.push(<Login parentContext={this} appContext={self.props.appContext} role={role}/>);
         var loginmessage = "Not Registered yet.Go to registration";
         self.props.parentContext.setState({loginscreen:loginscreen,
         loginmessage:loginmessage,
         buttonLabel:"Register",
         isLogin:true
          });
       }
       else{
         console.log("some error ocurred",response.data.code);
       }
     })
     .catch(function (error) {
       console.log(error);
     });
    }
    else{
      alert("Input field value is missing");
    }

  }
  render() {
    // console.log("props",this.props);
    var userhintText,userLabel;
    if(this.props.role === "user"){
      userhintText="Enter your User Id",
      userLabel="User Id"
    }
    else{
      userhintText="Enter your Admin Id",
      userLabel="Admin Id"
    }
    ///pass props to change button app bar title to register
    return (
      <div>
        <MuiThemeProvider>
          <div>
          
            <ButtonAppBar appbartitle= "Register" />
           {/* <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/> */}
           <TextField
             hintText={userhintText}
             floatingLabelText={userLabel}
             onChange = {(event,newValue) => this.setState({user_id:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" backgroundColor="cornflowerblue" labelColor="white" style={style} onClick={(event) => this.handleClick(event,this.props.role)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;
