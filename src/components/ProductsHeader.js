import React from 'react'
import PropTypes from 'prop-types'

const ProductsHeader = () => {
  return (
    <header className="products-header">
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

ProductsHeader.propTypes = {
  children: PropTypes.node
}

export default ProductsHeader
