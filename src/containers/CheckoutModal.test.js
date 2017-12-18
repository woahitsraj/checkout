import React from 'react'
import { shallow } from 'enzyme'
import { CheckoutModal } from './CheckoutModal'

const state = {
  cart: [
    {
      product: {
        name: 'Oversize Blazer',
        brand: 'Brand',
        color: 'black',
        size: '36',
        price: 1750,
        image: '/static/media/blazer.1628504d.png'
      },
      quantity: 1
    },
    {
      product: {
        name: 'Oversize Blazer',
        brand: 'Brand',
        color: 'black',
        size: '36',
        price: 1750,
        image: '/static/media/blazer.1628504d.png'
      },
      quantity: 1
    }
  ]
}
describe('CheckoutModal', () => {
  let wrapper
  let toggle = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
      <CheckoutModal
        cart={state.cart}
        toggle={toggle}
        isOpen
      />
    )
  })

  it('Will toggle the modal when one of the buttons is clicked', () => {
    wrapper.find('Button').first().simulate('click')
    expect(toggle.mock.calls.length).toBe(1)
  })
})
