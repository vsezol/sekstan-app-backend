const { Router } = require('express')
const router = Router()
const { sendResult } = require('../../wss/senders')

router.get('/', (req, res) => {
  const store = global.store
  if (store.currLamp.name && store.currLamp.type) {
    const OC = +req.query.degs * 60 + +req.query.mins
    const T = req.query.time
      .split(':')
      .map(item => +item)
      .reduce((curr, prev) => curr * prev)
    const payload = {
      OC,
      T,
      date: req.query.date,
      value: +req.query.value
    }
    store.currLampObj = payload
    sendResult()
  }
  res.sendStatus(200)
})

module.exports = router
