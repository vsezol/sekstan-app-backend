const { wss } = require('../index')
require('./senders')
const { SET_CURRENT_LAMP, UNSET_CURRENT_LAMP } = require('./requestTypes')

wss.on('connection', ws => {
  ws.on('message', msg => msgHandler(msg))
  global.store.ws = ws
})

const msgHandler = msg => {
  const data = JSON.parse(msg)
  switch (data.request) {
    case SET_CURRENT_LAMP:
      console.log('SET_CURRENT_LAMP |', 'TYPE:', data.type, '| NAME:', data.name)
      global.store.setCurrLamp(data.name, data.type)
      break
    case UNSET_CURRENT_LAMP:
      console.log('UNSET_CURRENT_LAMP')
      global.store.unsetCurrLamp()
      break
    case REMOVE_RESULT:
      console.log(REMOVE_RESULT)
      global.store.removeResult(data.index)
      break
  }
}
