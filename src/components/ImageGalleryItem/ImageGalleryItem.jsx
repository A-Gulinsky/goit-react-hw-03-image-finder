import { Component } from "react";
import PropTypes from 'prop-types'

import Modal from "components/Modal";

// emotion
import { Img } from "./ImageGalleryItem.styled";

class ImageGalleryItem extends Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }

  render() {
    const { showModal } = this.state
    const { webformatURL, tags, largeImageURL } = this.props.item
    
    return (
      <>
        <Img src={webformatURL} alt={tags} onClick={this.toggleModal} />

        {showModal && <Modal largeImg={largeImageURL} tags={tags} onClose={this.toggleModal} />}
      </>
    )
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string,
  })
}

export default ImageGalleryItem