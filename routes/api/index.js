const path = require('path')
const { Router } = require('express')
const DBManager = require('../../modules/dbManager')

const router = Router()

router.get('/archive', async (req, res) => {
  const archiveM = new DBManager('archive')
  const archive = await archiveM.content
  res.json(archive)
})

router.put('/begin-vars', async (req, res) => {
  const beginVarsM = new DBManager('beginVars')
  await (beginVarsM.content = req.body)
  console.log('new file beginVars.json')
  res.sendStatus(200)
})

router.put('/checked-planets-stars', async (req, res) => {
  const checkPlanets = new DBManager('checkPlanets')
  await (checkPlanets.content = req.body)
  console.log('new file checkPlanets.json')
  res.sendStatus(200)
})

router.delete('/checked-lamps', (req, res) => {
  global.store.deleteResult(+req.query.index)
  const currLamp = { ...global.store.currLampObj }
  delete currLamp.results
  res.json(currLamp)
})

module.exports = router
