import React from 'react'
import PropTypes from 'prop-types'

import './ModalFooter.css'

const ModalFooter = ({ children }) => {
  return (
    <div className="modal-footer">
      {children}
    </div>
  )
}

ModalFooter.propTypes = {
  children: PropTypes.node
}

export default ModalFooter
