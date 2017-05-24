
import { StackNavigator } from 'react-navigation'
import { AppRegistry } from 'react-native'

import HomeScreen from './containers/HomeScreen'
import ProfileScreen from './containers/ProfileScreen'

// tslint:disable-next-line:variable-name
const SimpleStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Home'
    })
  },
  Profile: {
    path: 'people/:name',
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: 'Profile'
    })  }
})

AppRegistry.registerComponent('RNProject', () => SimpleStack)
