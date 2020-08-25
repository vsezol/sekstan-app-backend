const { Router } = require('express')
const router = Router()
const { sendResult } = require('../../wss/senders')

router.get('/', (req, res) => {
  const store = global.store
  if (store.currLamp.name && store.currLamp.type) {
    const pyq = req.query
    const OC = +pyq.degs * 60 + +pyq.mins
    const T = pyq.time
    const date = pyq.date
    const value = pyq.value
    const payload = {
      OC,
      T,
      date,
      value
    }
    store.currLampObj = payload
    payload.request = 'RESULT'
    sendResult(payload)
  }
  res.sendStatus(200)
})

module.exports = router
