import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from './Card'
import './Item.css'
export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired
  }

  onDeleteKeyPress = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      this.props.onDeleteItem()
    }
  }

  render () {
    const { item, onDeleteItem, onQuantityChange } = this.props
    const { product } = item
    return (
      <Card className="item">
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-wrapper">
          <p className="product-brand">{product.brand}</p>
          <h2 className="product-name">{product.name}</h2>
          <div className="product-info">
            <div className="info-tag">
              <div
                className="color-square"
                style={{ backgroundColor : product.color }} />
              {product.color}
            </div>
            <div className="info-tag">size {product.size}</div>
          </div>
          <div className="product-actions-wrapper">
            <a
              tabIndex="0"
              onKeyPress={this.onDeleteKeyPress}
              role="button"
              onClick={onDeleteItem}
              className="product-action">Delete</a>
            <a
              tabIndex="0"
              role="button"
              className="product-action">Change</a>
          </div>
        </div>
        <div className="quantity-wrapper">
          <div className="quantity-input-wrapper">
            <button onClick={() => { onQuantityChange(parseInt(item.quantity) - 1) }}>-</button>
            <input
              onChange={(event) => {
                onQuantityChange(event.target.value)
              }}
              type="text"
              value={item.quantity} />
            <button onClick={() => { onQuantityChange(parseInt(item.quantity) + 1) }}>+</button>
          </div>
        </div>
        <div className="price-wrapper">
          <p className="product-price">{product.price * item.quantity} SEK</p>
        </div>
      </Card>
    )
  }
}
