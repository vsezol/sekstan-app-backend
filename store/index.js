class Lamp {
  results = []
  constructor(name, type) {
    this.name = name
    this.type = type
  }
}

class Store {
  ws = null
  lamps = {}
  currLamp = {
    type: '',
    name: ''
  }
  skp = null
  deviation = null
  get lampKey() {
    return this.currLamp.name + '_' + this.currLamp.type
  }
  get currLampObj() {
    return this.lamps[this.lampKey]
  }
  set currLampObj(data) {
    this.lamps[this.lampKey].results.push({ ...data })
  }
  setLamp(name, type) {
    this.currLamp.type = type
    this.currLamp.name = name
    this.lamps[this.lampKey] = new Lamp(name, type)
  }
  clearCurrLamp() {
    this.currLamp.name = ''
    this.currLamp.type = ''
  }
  removeResult(index) {
    this.lamps[this.lampKey].results.splice(index, 1)
  }
  // get avOCT() {
  //   const sums = this.lamps[this.lampKey].results.reduce(
  //     (prev, curr) => ({
  //       sumOC: prev.sumOC + curr.OC,
  //       sumT: prev.sumT + curr.T,
  //       count: prev.count + 1
  //     }),
  //     { sumOC: 0, sumT: 0, count: 0 }
  //   )
  //   // const avs = {
  //   //   avOC: Math.round((sums.sumOC / sums.count) * 1000) / 1000,
  //   //   avT: Math.round((sums.sumT / sums.count) * 1000) / 1000
  //   // }
  //   // return avs
  // }
}

global.store = new Store()
