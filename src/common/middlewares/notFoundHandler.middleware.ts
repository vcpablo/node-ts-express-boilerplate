import * as HttpStatus from 'http-status-codes'
import constants from '@common/constants/error.constants'

const notFoundHandler = (req, res) => {
  res.status(HttpStatus.NOT_FOUND).json({
    status: HttpStatus.NOT_FOUND,
    message: constants.NOT_FOUND_MESSAGE
  })
}

export default notFoundHandler
