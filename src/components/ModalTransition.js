import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './ModalTransition.css'

const ModalTransition = ({ children, show, ...props }) => (
  <TransitionGroup>
    {show ? (
      <CSSTransition
        {...props}
        timeout={500}
        classNames="modal-transition"
      >
        {children}
      </CSSTransition>
    ) : null}
  </TransitionGroup>
)
ModalTransition.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool
}

export default ModalTransition
