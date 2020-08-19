const path = require('path')
const { Router } = require('express')
const { readJSONFile } = require('../../modules/files')

const router = Router()

router.get('/archive', async (req, res) => {
  const archive = await readJSONFile(
    path.resolve(__dirname, '../../db/archive.json')
  )
  res.send(archive)
})

module.exports = router
