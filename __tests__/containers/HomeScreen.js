import 'react-native'
import React from 'react'
import HomeScreen from '../../src/containers/HomeScreen'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('<HomeScreen />', () => {
  it ('matches snapshot', () => {
    const tree = renderer.create(
      <HomeScreen />
    ).toJSON()
    expect (tree).toMatchSnapshot()
  })
})
