const asyncMap = async (array, action) => {
  const resolves = []
  for (item of array) {
    resolves.push(await action(item).catch(Promise.reject))
  }
  return resolves
}

module.exports = asyncMap
