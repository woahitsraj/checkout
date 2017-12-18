import React from 'react'
import { shallow } from 'enzyme'
import Item from './Item'

describe('Item', () => {
  let wrapper
  let onQuantityChange = jest.fn()
  let onDeleteItem = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
      <Item
        item={
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
        }
        onQuantityChange={onQuantityChange}
        onDeleteItem={onDeleteItem}
      />
    )
  })
  it('will decrease quantity', () => {
    wrapper.find('.item .quantity-wrapper .quantity-input-wrapper button')
      .first()
      .simulate('click')
    expect(onQuantityChange.mock.calls[0][0]).toBe(0)
  })
  it('will increase quantity', () => {
    wrapper.find('.item .quantity-wrapper .quantity-input-wrapper button[aria-label="increase quantity"]')
      .first()
      .simulate('click')
    expect(onQuantityChange.mock.calls[1][0]).toBe(2)
  })

  it('will delete an item', () => {
    wrapper.find('.item .product-wrapper .product-actions-wrapper .product-action')
      .first()
      .simulate('click')
    expect(onDeleteItem.mock.calls.length).toBe(1)
  })
})
