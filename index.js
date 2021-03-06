const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const WebSocket = require('ws')
const http = require('http')
const path = require('path')
require('./store')

const apiApp = express()
const spaApp = express()
const apiServer = http.createServer(apiApp)
// const spaServer = http.createServer(spaApp)
const wss = new WebSocket.Server({ server: apiServer })

module.exports = { wss }
require('./wss')

apiApp.use(bodyParser.urlencoded({ extended: false }))
apiApp.use(bodyParser.json())

//routes
const pyRouter = require('./routes/py')
const apiRouter = require('./routes/api')

apiApp.use(cors())
apiApp.use('/py', pyRouter)
apiApp.use('/api', apiRouter)

// spaApp.use(express.static(path.join(__dirname, 'dist')))

// spaApp.get('*', (req, res) => {
//   console.log(path.join(__dirname, '/dist/index.html'))
//   res.sendFile(path.join(__dirname, '/dist/index.html'))
// })

apiServer.listen(5000, () => {
  console.log('API-server started on port 5000')
})

// spaServer.listen(8080, () => {
//   console.log('SPA-server started on port 8080')
// })
