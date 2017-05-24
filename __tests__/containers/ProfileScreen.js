import 'react-native'
import React from 'react'
import ProfileScreen from '../../src/containers/ProfileScreen'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'


describe ('<ProfileScreen />', () => {
  it ('matches snapshot', () => {
    const tree = renderer.create(
      <ProfileScreen />
    ).toJSON()
    expect (tree).toMatchSnapshot()
  })
})
