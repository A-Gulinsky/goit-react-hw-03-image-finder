import { Component } from 'react'

import Searchbar from './Searchbar'
import ImageGallery from './ImageGallery'

// api
import fetchAPI from './services/api';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// emotion
import { Container ,Header ,Main } from './App/app.styled';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    loader: false,
    totalHits: 0,
    hits: [],
  }

  async componentDidUpdate(prevProps, prevState) {

    try {

      // searchQuery 
      const prevQuery = prevState.searchQuery
      const currentQuery = this.state.searchQuery

      if (prevQuery !== currentQuery) {
        
        this.setState({
          totalHits: 0,
          hits: [],
          loader: true
        })

        const data = await fetchAPI(currentQuery, 1)

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

        this.setState({loader: true})
        const data = await fetchAPI(currentQuery, currentPage)
        this.setState(state => ({ hits: [...state.hits, ...data.hits], loader: false }))
      }

      // check if currentHits === totalHits
      const {totalHits,hits} = this.state

      if (totalHits === hits.length && totalHits !== 0) {
        toast.info(`It's all that we could find`);
      }

    } catch (error) {
      toast.error(error.message)
    }

  }

  handleOnSubmit = (searchQuery) => {

    if (searchQuery === '') {
      toast.warning(`Search field cannot be empty`)
      return
    }

    this.setState({searchQuery})
  }

  buttonNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  }

  render() {

    const { hits, totalHits, loader} = this.state

    return (
      <Container>

        <Header>
          <Searchbar onSubmit={this.handleOnSubmit} />
        </Header>
        
        <Main>
          <ImageGallery
            onNextPage={this.buttonNextPage}
            props={{hits,totalHits,loader}}
          />
        </Main>

        <ToastContainer autoClose={3000} theme="dark" />
        
      </Container>
    )
  }
}

export default App