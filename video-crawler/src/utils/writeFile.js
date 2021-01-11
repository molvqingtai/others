const fs = require('fs').promises
const path = require('path')

/**
 * Write file from path
 * @param {String} _path Relative path
 * @param {[String]} file File data
 */
const writeFile = async (_path, file) => {
  const relativePath = path.resolve(__dirname, _path)
  const { dir } = path.parse(relativePath)
  await fs.mkdir(path.resolve(__dirname, dir), { recursive: true })
  return fs.writeFile(relativePath, file, { flag: 'w+' })
}

module.exports = writeFile
