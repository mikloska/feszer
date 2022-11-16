import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'

import connectDB from './config/db.js'
import aboutRoutes from './routes/aboutRoute.js'
import {notFound, errorHandler} from './middleware/errorHandler.js'

dotenv.config();
connectDB()
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

const PORT = process.env.PORT || 3000;
app.use(express.json())

app.use('/api/about', aboutRoutes)
const __dirname = path.resolve()

const root = path.join(__dirname, 'build')
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if(!req.header) res.redirect(`https://${req.header('host')}${req.url}`)
    if (req.header('x-forwarded-proto') !== 'https')
      if(req.header('host').includes('www')) {
        res.redirect(`https://${req.header('host')}${req.url}`)
      } else{
        res.redirect(`https://www.${req.header('host')}${req.url}`)
      }
    else
      next()
  })
  // console.log('In production')
  app.use(express.static(root))

  app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, ()=> console.log(`Server running in '${process.env.NODE_ENV}' mode on port ${PORT}`))