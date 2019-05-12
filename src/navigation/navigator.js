import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

//LOGIN SECTION
import Login from "../login/containers/loginContainer";
import RegisterAs from "../login/containers/registerAsContainer";
import Register from "../login/containers/registerContainer";
import Home from "../home";

const LoginNavigator = createStackNavigator(
  {
    Login,
    RegisterAs,
    Register
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      // headerStyle: {
      //   backgroundColor: '#2196F3',

      // },
      headerTransparent: true
    }
  }
);

const HomeStack = createBottomTabNavigator(
  {
    Home
  },
  {
    initialRouteName: "Home"
  }
);
const SwitchNavigator = createSwitchNavigator(
  {
    //   Splash,
    Login: {
      screen: LoginNavigator
    },
    Home: {
      screen: HomeStack
    }
  },
  {
    initialRouteName: "Login"
  }
);
const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
