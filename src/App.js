import React, { Component } from 'react'
import './App.css'

import Button from './components/Button'
import CheckoutModal from './containers/CheckoutModal'
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
        <CheckoutModal isOpen={isModalOpen} toggle={() => { this.setState({ isModalOpen: !isModalOpen }) }} />
      </div>
    )
  }
}

export default App
