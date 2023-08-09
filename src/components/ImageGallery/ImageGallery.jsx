import { PureComponent } from "react";

import ImageGalleryList from "components/ImageGalleryList";
import Button from "components/Button";
import Loader from "components/Loader";

// toast
import { toast } from 'react-toastify'

// api
import fetchTest from "components/services/api";

// emotion
import { GalleryBox } from "./ImageGallery.styled";

class ImageGallery extends PureComponent {
  state = {
    totalHits: 0,
    hits: [],
    page: 1,
    loader: false
  }

  async componentDidUpdate(prevProps,prevState) {

    try {
      
      // searchQuery 
      const prevQuery = prevProps.searchQuery
      const currentQuery = this.props.searchQuery

      if (prevQuery !== currentQuery) {
        
        this.setState({
          totalHits: 0,
          hits: [],
          loader: true
        })

        const data = await fetchTest(currentQuery, 1)

        if (!data.hits.length) {
          this.setState({loader: false})
          throw new Error(`No results found for your search`)
        }



        this.setState({
          totalHits: data.totalHits,
          hits: data.hits,
          page: 1,
          loader: false
        })
      }

      // page
      const currentPage = this.state.page
      const prevPage = prevState.page

      if (currentPage !== prevPage) {
        console.log(`Страница обновилась`)

        this.setState({loader: true})
        const data = await fetchTest(currentQuery, currentPage)
        this.setState(state => ({ hits: [...state.hits, ...data.hits], loader: false }))
      }


      // check if currentHits === totalHits
      const {totalHits,hits} = this.state

      if (totalHits === hits.length && totalHits !== 0) {
        toast.info(`It's all that we could find`);
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  ButtonNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  }

  render() {

    const {totalHits, hits, loader} = this.state

    return (
      <GalleryBox>

        {loader && <Loader />}
        <ImageGalleryList items={hits} />
        {totalHits !== hits.length && <Button isLoad={loader} onClick={this.ButtonNextPage} />}
        
      </GalleryBox>
    )
  }
}

export default ImageGallery