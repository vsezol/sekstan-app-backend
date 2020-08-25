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
}

global.store = new Store()
