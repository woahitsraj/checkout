import React from 'react'
import PropTypes from 'prop-types'

import './ModalSection.css'

const ModalSection = ({ children }) => {
  return (
    <section className="modal-section">
      {children}
    </section>
  )
}

ModalSection.propTypes = {
  children: PropTypes.node
}

export default ModalSection
