const { Router } = require('express')
const router = Router()
const { sendResult } = require('../../wss/senders')

router.get('/', (req, res) => {
  const store = global.store
  if (store.currLamp.name && store.currLamp.type) {
    const pyq = req.query
    store.currLampObj = pyq
    sendResult(pyq)
  }
  res.sendStatus(200)
})

module.exports = router
