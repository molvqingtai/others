const asyncFilter = async (array, action, reject = true) => {
  const resolves = []
  for (item of array) {
    try {
      const resolve = await action(item)
      resolve && resolves.push(resolve)
    } catch (error) {
      reject && resolves.push(Promise.reject(error))
    }
  }
  return resolves
}
module.exports = asyncFilter
