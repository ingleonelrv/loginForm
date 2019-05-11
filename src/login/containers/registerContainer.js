import React, { Component } from 'react'
import Register from '../components/register'
import API from '../../data/API'
import NavigationService from '../../navigation/navigation-service'

class RegisterContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',
      confirmPassword:'',
      type:null,
    }
  }
  componentDidMount=()=>{
    this.setState({
      type:this.props.navigation.getParam('type')
    },()=>{
      console.log(this.state.type)
    })
  }
  handleChangeText=(value,input)=>{
    this.setState({
      [input]:value
    })
  }
  handleRegister=()=>{
    this.register()
  }
  register= async ()=>{
    if(this.state.password!=this.state.confirmPassword){
      console.log('Contrasenia no coincide')
    }else{
      const user=await API.register(this.state)
      if(user){
          console.log(user)
          NavigationService.navigate('Home')
        }else{
          console.log('No se pudo guardar el usuario, favor intenta de nuevo')
        }
    }
  }
  render() {
    return (
        <Register handleChangeText={this.handleChangeText}
          handleRegister={this.handleRegister}
        />
    )
  }
}

export default RegisterContainer