import { Component } from 'react'

import Searchbar from './Searchbar'
import ImageGallery from './ImageGallery'

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// emotion
import { Container ,Header ,Main } from './App/app.styled';

class App extends Component {
  state = {
    searchQuery: '',
  }

  handleOnSubmit = (searchQuery) => {

    if (searchQuery === '') {
      toast.warning(`Search field cannot be empty`)
      return
    }

    this.setState({searchQuery})
  }

  render() {

    const {searchQuery} = this.state

    return (
      <Container>

        <Header>
          <Searchbar onSubmit={this.handleOnSubmit} />
        </Header>
        
        <Main>
          <ImageGallery searchQuery={searchQuery} />
        </Main>

        <ToastContainer autoClose={3000} theme="dark" />
        
      </Container>
    )
  }
}

export default App