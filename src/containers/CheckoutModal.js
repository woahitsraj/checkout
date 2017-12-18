import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Modal from '../components/Modal'
import ModalHeader from '../components/ModalHeader'
import ModalSection from '../components/ModalSection'
import ModalFooter from '../components/ModalFooter'
import Button from '../components/Button'
import Discount from '../components/Discount'
import Total from '../components/Total'

import ItemsContainer from './ItemsContainer'

export class CheckoutModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func.isRequired,
    cart: PropTypes.array
  }

  state = {
    discount: {
      percentage: 10,
      description: 'As a first time shopper you get a discount on your first order'
    }
  }

  render () {
    const { isOpen, toggle, cart } = this.props
    const { discount } = this.state
    const subTotal = cart.reduce((sum, item) => {
      return sum + (item.product.price * item.quantity)
    }, 0)
    const discountAmmount = subTotal * (discount.percentage / 100)
    const total = subTotal - discountAmmount
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>
          <h1>Your Shopping Cart</h1>
        </ModalHeader>
        <ModalSection>
          <ItemsContainer />
          <Discount
            discount={discount}
            discountAmmount={discountAmmount} />
        </ModalSection>
        <ModalSection>
          <Total
            total={total}
            discountAmmount={discountAmmount} />
        </ModalSection>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Continue Shopping</Button>
          <Button onClick={toggle}>Checkout</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CheckoutModal)
