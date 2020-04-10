// import CustomError from '@common/CustomError'

async function getCurrentUser(req, res, next) {
  return res.json({ id: 1, name: 'Administrator' })
  // return next(new CustomError('User not found'))
}

export { getCurrentUser }
