const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const apiApp = express()
// const spaApp = express()

apiApp.use(bodyParser.urlencoded({ extended: false }))
apiApp.use(bodyParser.json())

//routes
const pyRouter = require('./routes/py')
const apiRouter = require('./routes/api')

apiApp.use(cors())
apiApp.use('/py', pyRouter)
apiApp.use('/api', apiRouter)

apiApp.listen(5000, () => {
  console.log('API-server started on port 5000')
})

// spaApp.get('*', (req, res) => {
//   res.send('popajopa SPA')
// })

// spaApp.listen(80, () => {
//   console.log('SPA-server started on port 80')
// })
