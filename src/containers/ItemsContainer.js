import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeQuantity, deleteItem } from '../actions/action_cart'

import Items from '../components/Items'
import Item from '../components/Item'
import ItemsHeader from '../components/ItemsHeader'

class ItemsContainer extends Component {
  static propTypes = {
    cart: PropTypes.array,
    changeQuantity: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  }

  renderItems = () => {
    const { cart, changeQuantity, deleteItem } = this.props
    return cart.map((item, index) => {
      return (
        <Item
          key={index}
          item={item}
          onQuantityChange={quantity => {
            if (quantity > 0) {
              changeQuantity(index, quantity)
            }
          }}
          onDeleteItem={() => {
            deleteItem(index)
          }}
        />
      )
    })
  }

  render () {
    return (
      <Items>
        <ItemsHeader />
        {this.renderItems()}
      </Items>
    )
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, { changeQuantity, deleteItem })(
  ItemsContainer
)
