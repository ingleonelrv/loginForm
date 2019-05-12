import React, { Component } from "react";
import Login from "../components/login";
import LoginLogo from "../components/loginLogo";
// import {connect} from 'react-redux'
import NavigationService from "../../navigation/navigation-service";
import API from "../../data/API";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChangeEmail = event => {
    this.setState({
      email: event
    });
  };
  handleChangePassword = event => {
    this.setState({
      password: event
    });
  };
  handleSubmit = () => {
    this.login();
  };
  login = async () => {
    const { email, password } = this.state;
    const user = await API.login({ email, password });
    if (user) {
      NavigationService.navigate("Home");
    } else {
      console.log("Usuario o contrasenia no encontrado");
    }
  };
  onPressHere = () => {
    this.props.navigation.navigate("RegisterAs");
  };
  render() {
    return (
      <LoginLogo>
        <Login
          handleChangePassword={this.handleChangePassword}
          handleChangeEmail={this.handleChangeEmail}
          onPressHere={this.onPressHere}
          handleSubmit={this.handleSubmit}
        />
      </LoginLogo>
    );
  }
}
export default LoginContainer;
