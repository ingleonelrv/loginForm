import React, { Component } from 'react'
import RegisterAs from '../components/registerAs'
import NavigationService from '../../navigation/navigation-service'

class RegisterAsContainer extends Component {
  onPressHow=(type)=>{
    NavigationService.navigate('Register',{
      type: type
    })
  }
  render() {
    return (
        <RegisterAs onPressHow={this.onPressHow} />
    )
  }
}

export default RegisterAsContainer