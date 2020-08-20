const fs = require('fs')

const readJSONFile = path =>
  new Promise((res, rej) => {
    fs.readFile(path, (err, content) => {
      if (err) rej(err)
      const data = JSON.parse(content.toString())
      res(data)
    })
  })

const writeJSONFile = (path, data) =>
  new Promise((res, rej) => {
    fs.writeFile(path, JSON.stringify(data), err => {
      if (err) rej(err)
      res()
    })
  })

module.exports = {
  readJSONFile,
  writeJSONFile
}
