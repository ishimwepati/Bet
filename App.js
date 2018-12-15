import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'

//Importing Screens

import LoginScreen from './screens/loginscreen'
import HomeScreen from './screens/homescreen'

var root = createStackNavigator ({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
},
{
  initialRouteName: "Login"
})
var App = createAppContainer
export default App