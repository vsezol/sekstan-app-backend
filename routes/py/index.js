const { Router } = require('express')
const router = Router()
const { sendResult } = require('../../wss/senders')

router.get('/', (req, res) => {
  const store = global.store
  if (store.currLamp.name && store.currLamp.type) {
    const OC = +req.query.degs * 60 + +req.query.mins
    const hms = req.query.time.split(':').map(item => +item)
    const T = hms[0] * 3600 + hms[1] * 60 + hms[2]
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