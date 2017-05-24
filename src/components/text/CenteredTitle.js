import React from 'react'
import { Text, StyleSheet } from 'react-native'

// @flow
const CenteredTitle = ({title}: {title: string}) => {
  return (
    <Text style={styles.container}>{title}</Text>
  )
}

var styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0,
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 20
  }
})

export default CenteredTitle
