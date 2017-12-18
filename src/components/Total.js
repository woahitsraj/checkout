import React from 'react'
import PropTypes from 'prop-types'

import './Total.css'

const Total = ({ total, discountAmmount }) => {
  return (
    <div className="total">
      <div className="discount-amount-wrapper">
        <p>Discount:</p>
        <p className="discount-ammount">-{discountAmmount} SEK</p>
      </div>
      <div className="total-ammount-wrapper">
        <p>Total: </p>
        <p className="total-ammount">{total} SEK</p>
      </div>
    </div>
  )
}

Total.propTypes = {
  total: PropTypes.number,
  discountAmmount: PropTypes.number
}

export default Total
