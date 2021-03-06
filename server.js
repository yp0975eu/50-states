const express = require('express')
const bodyParser = require('body-parser')
const statesRoutes = require('./routes/states')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'client', 'dist')))
app.use(bodyParser.json())
app.use('/api', statesRoutes)

app.use(function(req, res, next) {
  res.status(400).send('Not Found')
})

app.use(function(req, res, next) {
  res.status(500).send('Server Error')
})

let server = app.listen(process.env.PORT || 3000, function () {
  console.log('App runnning on port: ', server.address().port)
})