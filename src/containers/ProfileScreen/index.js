import React from 'react'
import { Button, ScrollView } from 'react-native'

import CenteredTitle from '../../components/text/CenteredTitle'

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <CenteredTitle title={'Hello Profile'} />
      <Button onPress={() => navigation.goBack(null)} title='Go back' />
    </ScrollView>
  )
}

HomeScreen.navigationOptions = {
  title: 'Profile'
}

export default HomeScreen
