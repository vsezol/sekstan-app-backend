const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const WebSocket = require('ws')
const http = require('http')

const apiApp = express()
const apiServer = http.createServer(apiApp)
const wss = new WebSocket.Server({ server: apiServer })

module.exports = { wss }
require('./routes/api/wss')

apiApp.use(bodyParser.urlencoded({ extended: false }))
apiApp.use(bodyParser.json())

//routes
const pyRouter = require('./routes/py')
const apiRouter = require('./routes/api')

apiApp.use(cors())
apiApp.use('/py', pyRouter)
apiApp.use('/api', apiRouter)

apiServer.listen(5000, () => {
  console.log('API-server started on port 5000')
})
