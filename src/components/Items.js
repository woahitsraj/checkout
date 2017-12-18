import React from 'react'
import PropTypes from 'prop-types'

import './Items.css'

const Items = ({ children }) => {
  return (
    <div className="items">
      {children}
    </div>
  )
}

Items.propTypes = {
  children: PropTypes.node
}

export default Items
