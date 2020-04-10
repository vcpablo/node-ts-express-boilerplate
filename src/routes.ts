import { Router } from 'express'
import user from '@modules/user/user.routes'

// import authGuard from '@shared/middlewares/authGuard.middleware'

const routes = Router()
routes.use('/user', user)

export default routes
