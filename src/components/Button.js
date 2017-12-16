import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ children, className, color, ...rest }) => {
  return (
    <button className={`button ${className} ${color ? `color-${color}` : ''}`} {...rest}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string
}

export default Button
