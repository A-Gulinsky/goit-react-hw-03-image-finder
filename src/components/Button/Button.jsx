import PropTypes from 'prop-types'

// loader
import { Loader } from "components/Loader/Loader"

// emotion
import { LoadMore } from './Button.styled'

export const Button = ({onClick, isLoad}) => {
  
  return (
    <>
      {isLoad ? <Loader />: <LoadMore type="button" onClick={onClick}>Load More</LoadMore>}
    </>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  isLoad: PropTypes.bool,
}