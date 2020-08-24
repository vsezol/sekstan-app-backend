const { wss } = require('../index')
const { SET_CURRENT_PLANET } = require('./requestTypes')

wss.on('connection', ws => {
  ws.on('message', msg => {
    const data = JSON.parse(msg)
    const request = data.request
    switch (request) {
      case SET_CURRENT_PLANET:
        console.log(global.store)
        break
    }
  })
})

// const SetCurrentPlanet = () => {}
