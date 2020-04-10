import 'module-alias/register'
import dotenv from 'dotenv'
import http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import routes from './routes'
import errorHandler from '@common/middlewares/errorHandler.middleware'
import notFoundHandler from '@common/middlewares/notFoundHandler.middleware'

dotenv.config()

const app = express()

// CORS
app.use(cors())
app.all('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN)
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

// BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Helmet
app.use(helmet())
app.disable('x-powered-by')

// Routes
app.use('/ping', (req, res) => res.status(200).end())
app.use('/api', routes)

// Middlewares
app.use(errorHandler)
app.use(notFoundHandler)

// Database
// mongo.connect(
//   'CONNETION_STRING',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   }
// )

// mongo.connection.once('open', () => console.log('Connected to database'))

const server = http.createServer(app)

server
  .listen(process.env.PORT, () =>
    console.info(`Server started on port ${process.env.PORT}`)
  )
  .on('error', err => console.error(err))
