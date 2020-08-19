const express = require('express')
const apiApp = express()
// const spaApp = express()

//routes
const pyRouter = require('./routes/py')
const apiRouter = require('./routes/api')

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
