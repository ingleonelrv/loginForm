import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator, 
  createAppContainer} from 'react-navigation'

//LOGIN SECTION
import Login from '../login/containers/login'
import RegisterAs from '../login/containers/registerAs'
import Register from '../login/containers/register'
import Home from '../home'

const LoginNavigator = createStackNavigator({
    Login,
    RegisterAs,
    Register
},{
  initialRouteName:'Login',
})

const HomeStack = createBottomTabNavigator({
    Home
},{
  initialRouteName:'Home',
})
const SwitchNavigator = createSwitchNavigator({
//   Splash,
  Login:{
    screen:LoginNavigator
  },
  Home:{
    screen:HomeStack
  }
},{
  initialRouteName:'Login'
})
const AppContainer= createAppContainer(SwitchNavigator)

export default AppContainer