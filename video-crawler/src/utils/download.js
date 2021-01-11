const axios = require('axios')
const writeFile = require('./writeFile.js')

const download = async (url, path) => {
  const { data } = await axios.get(url, { responseType: 'arraybuffer' })
  await writeFile(path, data)
}

module.exports = download
