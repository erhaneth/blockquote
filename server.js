require('dotenv').config()
// required packages
const express = require('express')
const rowdy = require('rowdy-logger')
const cookieParser = require('cookie-parser')
const db = require('./models')
const cryptoJS = require('crypto-js')
const methodOverride = require("method-override")

// app config
const PORT = process.env.PORT || 3333
const app = express()
app.set('view engine', 'ejs')


// middle wares
const rowdyRes = rowdy.begin(app)
app.use(require('express-ejs-layouts'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(methodOverride("_method"))

// DIY middleware
// happens on every request
app.use((req, res, next) => {
  //  handy dandy debugging request logger
  // console.log(`[${new Date().toLocaleString()}] incoming request: ${req.method} ${req.url}`)
  // console.log('request body:', req.body)
  // modify the response to give data to the routes/middleware that is 'downstream'
  res.locals.myData = 'hi, I came from a middleware!'
  // tell express that the middleware is done
  next()
})

// auth middleware
app.use(async (req, res, next) => {
  try {
    // if there is a cookie -- 
    if (req.cookies.userId) {
      // try to find that user in the db
      const userId = req.cookies.userId
      const decryptedId = cryptoJS.AES.decrypt(userId, process.env.ENC_KEY).toString(cryptoJS.enc.Utf8)
      const user = await db.user.findByPk(decryptedId)
      // mount the found user on the res.locals so that later routes can access the logged in user
      // any value on the res.locals is available to the layout.ejs
      res.locals.user = user
    } else {
      // the user is explicitly not logged in
      res.locals.user = null
    }
    next()
  } catch (err) {
    console.log(err)
  }
})

// routes
app.get('/', async (req, res) => {
  const allPost = await db.compose.findAll()

  res.render('index', { allPosts: allPost })
})

// controllers
app.use('/users', require('./controllers/users'))
app.use('/compose', require('./controllers/compose'))

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  rowdyRes.print()
})
