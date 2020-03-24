const express = require('express')
const path = require('path')
const csrf = require('csurf')
const flash = require('connect-flash')
const mongoose = require('mongoose')
const session = require('express-session')
const helmet = require('helmet')
const compression = require('compression')
const MongoStore= require('connect-mongodb-session')(session)


const productsRoutes = require('./routers/products')
const adminRoutes = require('./routers/admin')
const authRoutes = require('./routers/auth')
const profileRoutes = require('./routers/profile')
const varMiddleware = require('./middleware/variables')
const userMiddleware = require('./middleware/user')
const errorHandler = require('./middleware/error')
const fileMiddleware = require('./middleware/file')
const keys = require('./keys')

const app = express()

const store = new MongoStore({
  collection: 'session',
  uri: keys.MONGODB_URI
})


app.use(express.static(path.join(__dirname, 'public')))
app.use('/images',express.static(path.join(__dirname, 'images')))
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: keys.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store
}))
app.use(fileMiddleware.single('avatar'))

app.use(flash())
app.use(helmet())
app.use(csrf())
app.use(compression())
app.use(varMiddleware)
app.use(userMiddleware)

app.use('/admin', adminRoutes)
app.use('/products', productsRoutes)
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

async function start() {
  try {
    await mongoose.connect(keys.MONGODB_URI, {
      useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useCreateIndex: true, 
      useFindAndModify: false 
    })
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()