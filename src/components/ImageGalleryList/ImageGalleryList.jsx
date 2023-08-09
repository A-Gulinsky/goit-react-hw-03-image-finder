import PropTypes from 'prop-types'

import ImageGalleryItem from "components/ImageGalleryItem"

// emotion
import { Ul ,Li } from './ImageGalleryList.styled'

const ImageGalleryList = ({ items }) => {

  return (
    <Ul>
      {items.map(item => (
        <Li key={item.id}>
          <ImageGalleryItem item={item} />
        </Li>
      ))}
    </Ul>
  )
}

ImageGalleryList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ImageGalleryList