import {default as React} from 'react'
import { Text, StyleSheet } from 'react-native'


// tslint:disable-next-line:variable-name
const CenteredTitle = (props: {title: string}) => {
  return (
    <Text style={styles.container}>{props.title}</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 20
  } as object
})

export default CenteredTitle
