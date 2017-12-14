import React, { Component } from 'react'
import './App.css'

import Button from './components/Button.js'
import Modal from './components/Modal.js'
class App extends Component {
  state = {
    isModalOpen: false
  }

  render () {
    const { isModalOpen } = this.state
    return (
      <div className="App">
        <Button
          onClick={() => { this.setState({ isModalOpen: true }) }}>
          View Cart
        </Button>
        <Modal isOpen={isModalOpen} toggle={() => { this.setState({ isModalOpen: !isModalOpen }) }}>
          Hello I am a modal
          <Button
            onClick={() => { this.setState({ isModalOpen: false }) }}>
            Close Modal
          </Button>
        </Modal>
      </div>
    )
  }
}

export default App
