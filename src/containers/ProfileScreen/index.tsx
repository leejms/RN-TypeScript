import React from 'react'
import { Button, ScrollView } from 'react-native'

import CenteredTitle from '../../components/text/CenteredTitle'

// tslint:disable-next-line:variable-name
const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <CenteredTitle title={'Hello Profile'} />
      <Button onPress={() => navigation.goBack(undefined)} title='Go back' />
    </ScrollView>
  )
}

export default HomeScreen
