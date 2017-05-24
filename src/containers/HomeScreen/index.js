import React from 'react'
import { Button, ScrollView } from 'react-native'

import CenteredTitle from '../../components/text/CenteredTitle'

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <CenteredTitle title='Hello Home!' />
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        title='Go to a profile screen'
      />
    </ScrollView>
  )
}

HomeScreen.navigationOptions = {
  title: 'Welcome'
}

export default HomeScreen
