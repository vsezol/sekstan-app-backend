const path = require('path')
const { readJSONFile, writeJSONFile } = require('./files')

class DBManager {
  constructor(name) {
    this.path = path.join(__dirname, '../db/', name + '.json')
  }
  get content() {
    return readJSONFile(this.path)
  }
  // set content(data) {

  // }
}

module.exports = DBManager
