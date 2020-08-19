const fs = require('fs')

const readJSONFile = path =>
  new Promise((res, rej) => {
    fs.readFile(path, (err, content) => {
      if (err) rej(err)
      const data = JSON.parse(content.toString())
      res(data)
    })
  })

module.exports = {
  readJSONFile
}
