import React from 'react'
import PropTypes from 'prop-types'

import './Total.css'

const Total = ({ total, discountAmmount }) => {
  return (
    <div className="total">
      <p>{discountAmmount}</p>
      <p>{total}</p>
    </div>
  )
}

Total.propTypes = {
  total: PropTypes.number,
  discountAmmount: PropTypes.number
}

export default Total
