import { PureComponent } from "react";

// components
import ImageGalleryList from "components/ImageGalleryList";
import Button from "components/Button";
import Loader from "components/Loader";

// emotion
import { GalleryBox } from "./ImageGallery.styled";

class ImageGallery extends PureComponent {

  render() {

    const { onNextPage } = this.props
    const { hits, totalHits, loader } = this.props.props

    return (
      <GalleryBox>

        {loader && <Loader />}
        <ImageGalleryList items={hits} />
        {totalHits !== hits.length && <Button isLoad={loader} onClick={onNextPage} />}
        
      </GalleryBox>
    )
  }
}

export default ImageGallery