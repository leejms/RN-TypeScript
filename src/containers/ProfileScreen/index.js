import React from 'react'
import { Button, ScrollView } from 'react-native'

import CenteredTitle from '../../components/text/CenteredTitle'

// @flow
const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <CenteredTitle title={1234} />
      <Button onPress={() => navigation.goBack(null)} title='Go back' />
    </ScrollView>
  )
}

HomeScreen.navigationOptions = {
  title: 'Profile'
}

export default HomeScreen
