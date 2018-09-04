const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const connection = require('./config/connection')
connection.connect()

const api = require('./Api/AuthenticateApi')
api.authenticate()

require('./routes')(app)

app.listen(config.port, function () {
  console.log(`Listening on Port ${config.port}`)
})
