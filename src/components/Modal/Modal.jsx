import { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import { Backdrop,ModalWindow } from './Modal.styled'

const rootModal = document.querySelector('#root-modal')

class Modal extends Component {

  componentDidMount() {
    window.addEventListener(`keydown`, this.handleKeyDown)
  }
  
  componentWillUnmount() {
    window.removeEventListener(`keydown`, this.handleKeyDown)
  }
  
  handleKeyDown = e => {

    if (e.code === `Escape`) {
      this.props.onClose()
    }
  }

  handleBackdropClose = e => {

    if (e.target === e.currentTarget) {
      this.props.onClose()
    }
  }

  render() {

    const { largeImg } = this.props

    return createPortal(
      <Backdrop onClick={this.handleBackdropClose}>
        <ModalWindow largeImg={largeImg} />
      </Backdrop>
    , rootModal)
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string,
}

export default Modal