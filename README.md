# RNProject
## A React Native seed project setup with
* Single entry file for Android and iOS
* Full TypeScript support
* VSCode TypeScript lint integration
* Jest Snapshot testing
* Sample StackNavigator implementation


## Example React Components with TypeScript
### Controlled Component
```
import React, { Component } from 'react'
import {Text} from 'react-native'
import { observer, inject } from 'mobx-react'

export interface Props {
  foo: string
  bar?: number
}

@inject('myStore')
@observer class MyScreen extends Component <Props, {}> {
    render() {
        return (
            <Text> MyScreen </Text>
        )
    }
}

export default ChatScreen
```
### Functional Component
```
import React from 'react'
import {Image, StyleSheet, View} from 'react-native'

export interface Props {
  src: string
  size?: number
}

// tslint:disable-next-line:variable-name
const Avatar = ({src, size = 44}: Props) => {
    return (
      <View style={{borderRadius: size}}>
        <Image
          style={[styles.img, {width: size, height: size, borderRadius: size / 2}]}
          source = {{uri: src}} resizeMode='cover'
        />
      </View>
    )
}

const styles = StyleSheet.create({
    img: {
      // custom style
    }
})

export default Avatar
```

## Comming Soon
* MobX
* Standard element library
* Jest touch tests
* CodePush integration

### Gotchas
React Native changed how they are loading the bundle for Android so now you have to extend your own `ReactNativeHost` because `@Override getJSMainModuleName()` for `ReactApplication` is not longer valid

### Special Thanks:
Ronto Jose's great blog on getting TypeScript going:  https://medium.com/@rintoj/react-native-with-typescript-40355a90a5d7
