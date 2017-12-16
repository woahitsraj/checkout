import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

import './Discount.css'

const Discount = ({ discount, discountAmmount }) => {
  return (
    <Card className="discount-wrapper">
      <div className="discount">
        <p>{discount.percentage}% discount on your order</p>
        <p>Discount {discountAmmount} SEK</p>
      </div>
      <p>{discount.description}</p>
    </Card>
  )
}

Discount.propTypes = {
  cart: PropTypes.array,
  discount: PropTypes.object,
  discountAmmount: PropTypes.number
}

export default Discount
