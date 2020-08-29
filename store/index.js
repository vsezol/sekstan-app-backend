const DBManager = require('../modules/dbManager')

class Store {
  ws = null
  lamps = {}
  currLamp = {
    type: '',
    name: ''
  }
  skp = null
  deviation = null

  deleteResult(index) {
    this.currLampObj.results.splice(index, 1)
    if (this.currLampObj.results.length) {
      this.updateSKPavOCTDEV()
    } else {
      this.clearSKPavOCTDEV()
    }
  }

  get lampKey() {
    return this.currLamp.name + '_' + this.currLamp.type
  }

  get currLampObj() {
    return this.lamps[this.lampKey]
  }

  set currLampObj(data) {
    this.currLampObj.results.push({ ...data })
    this.updateSKPavOCTDEV()
  }

  updateSKPavOCTDEV() {
    const { avOC, avT } = this.avOCT
    this.currLampObj.avOC = avOC
    this.currLampObj.avT = avT
    this.currLampObj.skp = this.skpCurr
    this.currLampObj.deviation = this.deviationCurr
  }

  clearSKPavOCTDEV() {
    this.currLampObj.avOC = 0
    this.currLampObj.avT = 0
    this.currLampObj.skp = 0
    this.currLampObj.deviation = 0
  }

  get lastResult() {
    const { results, avOC, avT, name, type, skp, deviation } = this.currLampObj
    return {
      ...results.slice(-1)[0],
      avOC,
      avT,
      name,
      type,
      skp,
      deviation
    }
  }

  get avOCT() {
    const { sumOC, sumT } = this.currLampObj.results.reduce(
      (prev, curr) => ({
        sumOC: (prev.sumOC += curr.OC),
        sumT: (prev.sumT += curr.T)
      }),
      { sumOC: 0, sumT: 0 }
    )
    const length = this.currLampObj.results.length
    return {
      avOC: sumOC / length,
      avT: sumT / length
    }
  }

  get skpCurr() {
    const { avOC } = this.avOCT
    const skp = Math.sqrt(
      this.currLampObj.results
        .map(result => result.OC)
        .map(OC => Math.pow(avOC - OC, 2))
        .reduce((prev, curr) => (prev += curr))
    )
    return skp
  }

  get deviationCurr() {
    const { minOC, maxOC } = this.currLampObj.results.reduce(
      (prev, curr) => {
        if (curr.OC < prev.minOC) prev.minOC = curr.OC
        if (curr.OC > prev.maxOC) prev.maxOC = curr.OC
        return prev
      },
      { minOC: Infinity, maxOC: -Infinity }
    )
    return maxOC - minOC
  }

  setCurrLamp(name, type) {
    this.currLamp = { name, type }
    if (!this.lamps.hasOwnProperty(this.lampKey)) {
      this.lamps[this.lampKey] = new Lamp(name, type)
    }
  }

  unsetCurrLamp() {
    this.saveLamp()
    this.currLamp = { name: '', type: '' }
  }

  saveLamp() {
    const currLampM = new DBManager('lamps/' + this.lampKey)
    currLampM.content = this.currLampObj
  }
}

class Lamp {
  results = []
  avOC = 0
  avT = 0
  skp = 0
  deviation = 0
  constructor(name, type) {
    this.name = name
    this.type = type
  }
}

global.store = new Store()
