// const { chromium } = require('playwright')

// ;(async () => {
//   const browser = await chromium.launch()
//   const context = await browser.newContext()
//   const page = await context.newPage()
//   await page.goto('http://whatsmyuseragent.org/')
//   await page.screenshot({ path: `example.png` })
//   await browser.close()
// })()
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://example.com')
  await page.screenshot({ path: 'example.png' })

  await browser.close()
})()
