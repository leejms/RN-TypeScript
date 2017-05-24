
import { StackNavigator } from 'react-navigation'
import { AppRegistry } from 'react-native'

import HomeScreen from './src/containers/HomeScreen'
import ProfileScreen from './src/containers/ProfileScreen'

const SimpleStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    path: 'people/:name',
    screen: ProfileScreen
  }
})

AppRegistry.registerComponent('RNProject', () => SimpleStack)
