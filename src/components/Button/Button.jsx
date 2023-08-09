import PropTypes from 'prop-types'

// loader
import Loader from 'components/Loader'

// emotion
import { LoadMore } from './Button.styled'

const Button = ({onClick, isLoad}) => {
  
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

export default Button