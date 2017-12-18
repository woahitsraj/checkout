import React from 'react'
import PropTypes from 'prop-types'

import './ItemsHeader.css'

const ItemsHeader = () => {
  return (
    <header className="items-header">
      <div className="product-image-wrapper" />
      <div className="product-wrapper">
        <label htmlFor="product">Product</label>
      </div>
      <div className="quantity-wrapper">
        <label htmlFor="product">Quantity</label>
      </div>
      <div className="price-wrapper">
        <label htmlFor="product">Price</label>
      </div>
    </header>
  )
}

ItemsHeader.propTypes = {
  children: PropTypes.node
}

export default ItemsHeader
