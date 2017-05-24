/* eslint-env jest */
import 'react-native'
import React from 'react'
import ProfileScreen from '../ProfileScreen'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('<ProfileScreen />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <ProfileScreen navigation/>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
