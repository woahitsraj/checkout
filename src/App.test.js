import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('Renders the app without crashing', () => {
    expect(wrapper.find('.App').length).toEqual(1)
  })

  it('Renders a button', () => {
    expect(wrapper.find('Button').length).toEqual(1)
  })

  it('Opens the modal when the button is clicked', () => {
    expect(wrapper.state('isModalOpen')).toBe(false)
    expect(wrapper.find('Button').simulate('click'))
    expect(wrapper.state('isModalOpen')).toBe(true)
  })
})
