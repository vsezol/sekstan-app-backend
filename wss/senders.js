const sendResult = () => {
  const { ws, lastResult } = global.store
  ws.send(
    JSON.stringify({ ...lastResult, request: 'CHECK_PLANETS_ADD_RESULT' })
  )
}

module.exports = {
  sendResult
}
