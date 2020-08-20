const path = require('path')
const { Router } = require('express')
const { readJSONFile } = require('../../modules/files')
const DBManager = require('../../modules/dbManager')

const router = Router()

router.get('/archive', async (req, res) => {
  const archiveM = new DBManager('archive')
  const archive = await archiveM.content
  res.json(archive)
})

router.put('/begin-vars', async (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

module.exports = router
