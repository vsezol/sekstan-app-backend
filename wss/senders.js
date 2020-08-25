const sendResult = result => {
  const ws = global.store.ws
  ws.send(JSON.stringify(result))
}

module.exports = {
  sendResult
}
