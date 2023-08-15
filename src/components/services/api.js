import axios from "axios";
import {toast} from 'react-toastify'

const BASE_URL = `https://pixabay.com/api/`
const API_KEY = `33943342-a062799c31b03d09b9648bb90`

async function fetchAPI(searchQuery,page) {

  const options = new URLSearchParams({
    key: API_KEY,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
    per_page: 12,
    page: page,
    q: searchQuery,
  })

  try {
    const responce = await axios.get(`${BASE_URL}?${options.toString()}`)
    
    if (!responce.status) {
      throw new Error(`Something wrong...`)  
    }

    return responce.data

  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}

export default fetchAPI