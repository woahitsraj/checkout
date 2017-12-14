import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import './Modal.css'
const modalRoot = document.getElementById('modal-root')

export default class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    toggle: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentWillUnmount () {
    modalRoot.removeChild(this.el)
  }

  componentDidMount () {
    modalRoot.appendChild(this.el)
  }

  render () {
    const { children, isOpen } = this.props
    if (isOpen) {
      return ReactDOM.createPortal(
        <div className="modal-container">
          <div className="modal-view">
            {children}
          </div>
        </div>,
        this.el
      )
    } else return null
  }
}
