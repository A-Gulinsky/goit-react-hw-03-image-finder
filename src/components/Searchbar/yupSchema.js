import * as yup from 'yup'

export const schema = yup.object().shape({
  searchQuery: yup.string().required()
})