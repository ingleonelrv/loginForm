import React, { Component } from "react";
import RegisterAs from "../components/registerAs";
import NavigationService from "../../navigation/navigation-service";

import LoginLogo from "../components/loginLogo";

class RegisterAsContainer extends Component {
  onPressHow = type => {
    NavigationService.navigate("Register", {
      type: type
    });
  };
  render() {
    return (
      <LoginLogo>
        <RegisterAs onPressHow={this.onPressHow} />
      </LoginLogo>
    );
  }
}

export default RegisterAsContainer;
