import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Modal from '../components/Modal'
import ModalHeader from '../components/ModalHeader'
import ModalSection from '../components/ModalSection'
import ModalFooter from '../components/ModalFooter'
import Button from '../components/Button'

import ProductsContainer from './ProductsContainer'

export default class CheckoutModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func.isRequired
  }
  render () {
    const { isOpen, toggle } = this.props
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>
          <h1>Your Shopping Cart</h1>
        </ModalHeader>
        <ModalSection>
          <ProductsContainer />
          <Discount />
        </ModalSection>
        <ModalSection>
          <Total />
        </ModalSection>
        <ModalFooter>
          <Button onClick={toggle}>Continue Shopping</Button>
          <Button onClick={toggle}>Checkout</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
