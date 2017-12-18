import React from 'react'
import PropTypes from 'prop-types'

import './ItemsHeader.css'

const ItemsHeader = () => {
  return (
    <header className="items-header">
      <div className="product-image-wrapper" />
      <div className="product-wrapper">
        <label id="product-label" htmlFor="product">
          Product
        </label>
      </div>
      <div className="quantity-wrapper">
        <label id="quantity-label" htmlFor="quantity">
          Quantity
        </label>
      </div>
      <div className="price-wrapper">
        <label id="price-label" htmlFor="price">
          Price
        </label>
      </div>
    </header>
  )
}

ItemsHeader.propTypes = {
  children: PropTypes.node
}

export default ItemsHeader
