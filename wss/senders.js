const sendResult = result => {
  global.store.ws.send(JSON.stringify(result))
}

module.exports = {
  sendResult
}
