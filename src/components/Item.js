import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onDeleteProduct: PropTypes.func.isRequired
  }

  render () {
    const { item } = this.props
    const { product } = item
    return (
      <Card className="item">
        <div className="product-image-wrapper">
          <img src="" alt={product.name} />
        </div>
        <div className="product-wrapper">
          <p className="product-brand">{product.brand}</p>
          <h2 className="product-name">{product.name}</h2>
          <div className="product-info">
            <span className="info-tag">{product.color}</span>
            <span className="info-tag">{product.size}</span>
          </div>
        </div>
      </Card>
    )
  }
}
