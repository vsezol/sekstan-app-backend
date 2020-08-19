const express = require('express')
const apiApp = express()
const spaApp = express()

apiApp.get('/api', (req, res) => {
  res.send('popajopa api')
})

apiApp.get('/py', (req, res) => {
  res.send('popajopa py')
  console.log(req.query)
})

spaApp.get('*', (req, res) => {
  res.send('popajopa SPA')
})

apiApp.listen(5000, () => {
  console.log('api server started on port 5000')
})

spaApp.listen(80, () => {
  console.log('spa server started on port 80')
})
