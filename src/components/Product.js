import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Product extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onDeleteProduct: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className="product">
        I am a product
      </div>
    )
  }
}
