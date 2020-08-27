const { Router } = require('express')
const router = Router()
const { sendResult } = require('../../wss/senders')

router.get('/', (req, res) => {
  const store = global.store
  if (store.currLamp.name && store.currLamp.type) {
    const pyq = req.query
    store.currLampObj = pyq
    pyq.type = 'CHECK_PLANETS_ADD_RESULT'
    sendResult(pyq)
  }
  res.sendStatus(200)
})

module.exports = router
