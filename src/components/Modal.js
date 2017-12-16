import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import ModalTransition from './ModalTransition'

import './Modal.css'
const modalRoot = document.getElementById('modal-root')

export default class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    toggle: PropTypes.func.isRequired
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      document.addEventListener('mousedown', this.handleClickOutside)
    } else if (this.props.isOpen && !nextProps.isOpen) {
      document.removeEventListener('mousedown', this.handleClickOutside)
    }
  }

  setModalContainerRef = (node) => {
    this.modalContainerRef = node
  }

  handleClickOutside = (event) => {
    if (this.modalContainerRef && !this.modalContainerRef.contains(event.target)) {
      this.props.toggle()
    }
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
    return ReactDOM.createPortal(
      <ModalTransition show={isOpen}>
        <div className="modal-container">
          <div ref={this.setModalContainerRef} className="modal-view">
            {children}
          </div>
        </div>
      </ModalTransition>
      ,
      this.el
    )
  }
}
