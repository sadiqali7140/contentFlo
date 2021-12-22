const express = require('express')
const mongoose = require('mongoose')
require('crypto').randomBytes(64).toString('hex')
require('dotenv').config()

const app = express()
app.use(express.json())

const port = process.env.PORT || 5000;


// Connect to DB
mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err))

mongoose.Promise = global.Promise

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// app.use((req, res, next) => {
//   res.send('Welcome to Express')
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})


const userRoutes = require('./routes/users')
app.use('/users', userRoutes)

const authentication = require('./routes/auth')
app.use('/auth', authentication)

const content = require('./routes/content')
app.use('/content', content)

const comment = require('./routes/comment')
app.use('/comment', comment)

//const client = require('./routes/client')
//app.use('/client', client)