const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const path = require("path")
const cors = require('cors')

const {connectDB}  = require("./config/db.js")
const aboutRoute = require("./routes/aboutRoute.js")
const aboutMembersRoute = require("./routes/aboutMembersRoute.js")
const eventsRoute = require("./routes/eventsRoute.js")
const galleryRoute = require("./routes/galleryRoute.js")
const loginRoute = require("./routes/loginRoute.js")
const videosRoute = require("./routes/videosRoute.js")
const {notFound, errorHandler} = require("./middleware/errorHandler.js")

dotenv.config();
connectDB()
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())

app.use('/api', aboutRoute)
app.use('/api', aboutMembersRoute)
app.use('/api', eventsRoute)
app.use('/api', galleryRoute)
app.use('/api', loginRoute)
app.use('/api', videosRoute)
// const __dirname = path.resolve()

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