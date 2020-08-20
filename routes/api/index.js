const path = require('path')
const { Router } = require('express')
const { readJSONFile } = require('../../modules/files')
const DBManager = require('../../modules/dbManager')

const router = Router()

router.get('/archive', async (req, res) => {
  const archiveM = new DBManager('archive')
  res.send(await archiveM.content)
})

module.exports = router
