import { Component } from "react"

// Formik/yup
import { Formik } from "formik"
import { schema } from "./yupSchema"

// icon
import { AiOutlineSearch } from 'react-icons/ai'

// emotion
import { SearchbarForm,Input,Button } from "./Searchbar.styled"

class Searchbar extends Component {

  state = {
    searchQuery: ''
  }

  handleSubmit = (values,actions) => {
    const { searchQuery } = values

    this.props.onSubmit(searchQuery.trim())
  }

  render() {

    const initialValues = {
      searchQuery: ''
    }

    return (
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={this.handleSubmit}>
        <SearchbarForm autoComplete="off">

          <Button type="submit">
            <AiOutlineSearch  size={20} />
          </Button>
          
          <Input
            type="text"
            name="searchQuery"
            placeholder="Search images and photos" 
          />
        
        </SearchbarForm>
      </Formik>
    )
  }
}

export default Searchbar
