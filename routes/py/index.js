const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  console.log(req.query)
  res.sendStatus(200)
})

module.exports = router