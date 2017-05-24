import React from 'react'
import { Text, StyleSheet } from 'react-native'

const CenteredTitle = ({title}) => {
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
