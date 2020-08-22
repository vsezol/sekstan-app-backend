const { wss } = require('../../index')

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(message)
  })
  ws.send('OK')
})
