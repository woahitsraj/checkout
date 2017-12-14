import React from 'react'
import PropTypes from 'prop-types'
import './ModalHeader.css'
const ModalHeader = ({ children }) => {
  return (
    <header className="modal-header">
      {children}
    </header>
  )
}

ModalHeader.propTypes = {
  children: PropTypes.node
}

export default ModalHeader
