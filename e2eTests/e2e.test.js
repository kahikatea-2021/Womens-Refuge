const { chromium, firefox } = require('playwright')
const config = require('../server/db/knexfile').development
const db = require('knex')(config)

jest.setTimeout(10000)

const imgpath = 'tests/e2e/screenshots/'
const timeOut = 2000

let browser
let page
beforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 500 })
  await db.migrate.latest({ directory: './server/db/migrations' })
})

beforeEach(async () => {
  const context = await browser.newContext()
  page = await context.newPage()
  await db.seed.run({ directory: './server/db/seeds' })
})

afterEach(async () => {
  await page.close()
})

afterAll(async () => {
  await browser.close()
})

function waitForAmount (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

// USER TESTS

test('Home page should display the text Tuohunga', async () => {
  await page.goto('localhost:3000')
  expect(await page.title()).toMatch('Tuohunga')
  await page.screenshot({ path: imgpath + 'home.png' })
})

test('Clicking Log In on home goes to auth0 login', async () => {
  await page.goto('localhost:3000')
  await Promise.all([page.click('button'), page.waitForNavigation('load')
  ])
  console.log(await page.url())

  expect(await page.url()).toMatch('https://dev-xfbt5qv8.au.auth0.com/')
  await page.screenshot({ path: imgpath + 'registerpage.png' })
})
