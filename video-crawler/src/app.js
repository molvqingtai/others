const { chromium } = require('playwright')
const asyncFilter = require('./utils/asyncFilter.js')
const asyncMap = require('./utils/asyncMap.js')

;(async () => {
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto(
    'https://www.yuque.com/books/share/8a9f11bd-a6e5-4a1d-973a-c22ca232fcfb/du2msw'
  )
  const menuHandleList = await page.$$('.ant-tree-treenode a[title]')
  const menuInfoList = await Promise.all(
    menuHandleList.map(async (item) => {
      return item.evaluate((node) => ({
        name: node.innerText,
        href: node.href
      }))
    })
  )

  const videoInfoList = await asyncFilter(
    menuInfoList,
    async ({ name, href }) => {
      const page = await context.newPage()
      await page.goto(href)
      const videos = await asyncMap(await page.$$('video'), async (item) =>
        item.getAttribute('data-src')
      )
      await page.close()
      return videos.length && { name, videos }
    }
  )
  // debugger
  videoInfoList.forEach(({ name, videos }) => {
    videos.forEach((item) => {})
  })
  await browser.close()
})()
