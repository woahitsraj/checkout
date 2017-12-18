import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ItemsContainer from './ItemsContainer'

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
describe('ItemsContainer', () => {
  let wrapper
  let store
  beforeEach(() => {
    const mockStore = configureStore()
    store = mockStore(state)
    wrapper = mount(
      <Provider store={store}>
        <ItemsContainer
        />
      </Provider>
    )
  })

  it('Should render Items, ItemsHeader, and two Item components', () => {
    expect(wrapper.find('Items').length).toBe(1)
    expect(wrapper.find('ItemsHeader').length).toBe(1)
    expect(wrapper.find('Item').length).toBe(2)
  })

  it('Passes quantity to the quantity input', () => {
    expect(wrapper.find('.item .quantity-wrapper .quantity-input-wrapper input')
      .first()
      .prop('value'))
      .toBe(1)
  })
})
