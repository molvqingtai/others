const asyncMap = async (array, action) => {
  const resolves = []
  for (const item of array) {
    resolves.push(await action(item).catch(Promise.reject))
  }
  return resolves
}

module.exports = asyncMap
