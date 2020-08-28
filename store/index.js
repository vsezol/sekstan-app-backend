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
  }

  get lampKey() {
    return this.currLamp.name + '_' + this.currLamp.type
  }

  get currLampObj() {
    return this.lamps[this.lampKey]
  }

  set currLampObj(data) {
    this.currLampObj.results.push({ ...data })
    const { avOC, avT } = this.avOCT
    this.currLampObj.avOC = avOC
    this.currLampObj.avT = avT
  }

  get lastResult() {
    const { results, avOC, avT, name, type } = this.currLampObj
    return {
      ...results.slice(-1)[0],
      avOC,
      avT,
      name,
      type
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

  setCurrLamp(name, type) {
    this.currLamp = { name, type }
    this.lamps[this.lampKey] = new Lamp(name, type)
  }

  unsetCurrLamp() {
    this.currLamp = { name: '', type: '' }
  }
}

class Lamp {
  results = []
  avOC = 0
  avT = 0
  constructor(name, type) {
    this.name = name
    this.type = type
  }
}

global.store = new Store()
