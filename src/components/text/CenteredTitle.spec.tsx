/* eslint-env jest */
import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import CenteredTitle from './CenteredTitle'

describe('<CenteredTitle />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <CenteredTitle title='Hello Test' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
