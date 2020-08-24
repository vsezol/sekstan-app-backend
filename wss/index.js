const { wss } = require('../index')
const { SET_CURRENT_PLANET } = require('./requestTypes')

wss.on('connection', ws => {
  ws.on('message', message => {
    const request = message.request
    switch (request) {
      case SET_CURRENT_PLANET:
        break
    }
  })
  ws.send('OK')
})

const SetCurrentPlanet = () => {

}