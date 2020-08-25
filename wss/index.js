const { wss } = require('../index')
require('./senders')
const { SET_CURRENT_LAMP, CLEAR_CURRENT_LAMP, REMOVE_RESULT } = require('./requestTypes')

wss.on('connection', ws => {
  ws.on('message', msg => msgHandler(msg))
  global.store.ws = ws
})

const msgHandler = msg => {
  const data = JSON.parse(msg)
  switch (data.request) {
    case SET_CURRENT_LAMP:
      console.log(SET_CURRENT_LAMP)
      global.store.setLamp(data.name, data.type)
      break
    case CLEAR_CURRENT_LAMP:
      console.log(CLEAR_CURRENT_LAMP)
      global.store.clearCurrLamp()
      break
    case REMOVE_RESULT:
      console.log(REMOVE_RESULT)
      global.store.removeResult(data.index)
      break
  }
}
