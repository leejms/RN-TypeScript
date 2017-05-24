# RNProject
## A React Native seed project setup with
* Single entry file for Android and iOS
* Full TypeScript support
* VSCode TypeScript lint integration
* Jest Snapshot testing
* Sample StackNavigator implementation

## Comming Soon
* MobX
* Standard element library
* Jest touch tests
* CodePush integration

### Gotchas
React Native changed how they are loading the bundle for Android so now you have to extend your own `ReactNativeHost` because `@Override getJSMainModuleName()` for `ReactApplication` is not longer valid

### Special Thanks:
Ronto Jose's great blog on getting TypeScript going:  https://medium.com/@rintoj/react-native-with-typescript-40355a90a5d7