import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeQuantity, deleteProduct } from '../actions/action_cart'
import Product from '../components/Product'
import ProductsHeader from '../components/ProductsHeader'

class ProductsContainer extends Component {
  static propTypes = {
    cart: PropTypes.array,
    changeQuantity: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
  }

  renderProducts = () => {
    const { cart, changeQuantity, deleteProduct } = this.props
    return cart.map((product, index) => {
      return (
        <Product
          key={index}
          product={product}
          onQuantityChange={(quantity) => {
            changeQuantity(index, quantity)
          }}
          onDeleteProduct={() => {
            deleteProduct(index)
          }} />
      )
    })
  }

  render () {
    return (
      <div>
        <ProductsHeader />
        {this.renderProducts()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, { changeQuantity, deleteProduct })(ProductsContainer)
