import HttpStatus from 'http-status-codes'

class CustomError extends Error {
  constructor(
    message,
    status = HttpStatus.INTERNAL_SERVER_ERROR,
    details = undefined,
    ...params
  ) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    this.message = message
    this.details = details
    this.status = status
    this.date = new Date()
  }
}

export default CustomError
