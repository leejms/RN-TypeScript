import React from 'react'
import { Button, ScrollView } from 'react-native'

import CenteredTitle from '../../components/text/CenteredTitle'

// tslint:disable-next-line:variable-name
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

export default HomeScreen
