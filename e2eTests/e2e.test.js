const { chromium, firefox } = require('playwright')
const config = require('../server/db/knexfile').development
const db = require('knex')(config)

jest.setTimeout(20000)

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

// test('Home page should display the text Tuohunga', async () => {
//   await page.goto('localhost:3000')
//   expect(await page.title()).toMatch('Tuohunga')
//   await page.screenshot({ path: imgpath + 'home.png' })
// })

// test('Clicking Log In on home goes to auth0 login', async () => {
//   await page.goto('localhost:3000')
//   await Promise.all([page.click('button'), page.waitForNavigation('load')
//   ])
//   // console.log(await page.url())

//   expect(await page.url()).toMatch('https://dev-xfbt5qv8.au.auth0.com/')
//   await page.screenshot({ path: imgpath + 'registerpage.png' })
// })

// test('As a police officer, I can search for a house manually', async () => {
// // Navigate to page
//   await page.goto('localhost:3000')
//   await Promise.all([page.click('button'), page.waitForNavigation('load')
//   ])
//   // Log in
//   expect(await page.url()).toMatch('https://dev-xfbt5qv8.au.auth0.com/')
//   await page.fill('[type=email]', 'generaluser@safehouse.com')
//   await page.fill('[type=password]', 'generalUser!')
//   await page.click('button')
//   await page.screenshot({ path: imgpath + 'policesigninsuccess.png' })
//   expect(await page.url()).toMatch('http://localhost:3000')
//   // Select an Island (North Island)
//   await page.click('text=North Island')
//   await page.screenshot({ path: imgpath + 'policeislandbuttonsuccess.png' })
//   expect(await page.url()).toMatch('http://localhost:3000/#/northisland')
//   // Select a region (Northland)
//   await page.click('text=Northland')
//   await page.screenshot({ path: imgpath + 'policeNorthlandbuttonsuccess.png' })
//   expect(await page.url()).toMatch('http://localhost:3000/#/region/Northland')
//   // Select a house (Kōwhai)
//   await page.click('text=Kōwhai')
//   await page.screenshot({ path: imgpath + 'policeKōwhaibuttonsuccess.png' })
//   expect(await page.url()).toMatch('http://localhost:3000/#/house/K%C5%8Dwhai')
//   // Select the log out button
//   await page.click('text=LOG OUT')
//   await page.screenshot({ path: imgpath + 'policeLOGOUTbuttonsuccess.png' })
//   expect(await page.url()).toMatch('http://localhost:3000/#/')
// })

// test('As a house coordinator, I can edit my house', async () => {
//   // Navigate to page
//   await page.goto('localhost:3000')
//   await Promise.all([page.click('button'), page.waitForNavigation('load')
//   ])
//   // Log in
//   expect(await page.url()).toMatch('https://dev-xfbt5qv8.au.auth0.com/')
//   await page.fill('[type=email]', 'refugecoordinator@safehouse.com')
//   await page.fill('[type=password]', 'refugeCoordinator!')
//   await page.click('button')
//   await page.screenshot({ path: imgpath + 'hostsigninsuccess.png' })
//   expect(await page.url()).toMatch('http://localhost:3000')
//   // click on MY WHARE button
//   await page.click('text=MY WHARE')
//   await page.screenshot({ path: imgpath + 'hostwharebuttonsuccess.png' })
//   expect(await page.url()).toMatch('http://localhost:3000/#/house/manage/1')
//   // update house details
//   await page.fill(':nth-match(textarea, 1)', '2 single beds')
//   await page.fill(':nth-match(textarea, 2)', '2 queen beds')
//   await page.fill(':nth-match(textarea, 3)', '2 bunk beds')
//   // checkbox
//   await page.click('#available-3')
//   // form
//   await page.fill('#phone1', '027 5757 021')
//   await page.fill('#phone2', '021 235 8989')
//   await page.fill('#notes', 'Room 3 under renovation')
//   await page.click('text=SUBMIT')
//   await page.screenshot({ path: imgpath + 'hostchangeroomdatasuccess.png' })
//   expect(await page.url()).toMatch('http://localhost:3000/#/house/K%C5%8Dwhai')
//   await page.click('text=LOG OUT')
//   await page.screenshot({ path: imgpath + 'hostLOGOUTbuttonsuccess.png' })
//   expect(await page.url()).toMatch('http://localhost:3000/#/')
// })

test('As an admin,', async () => {
  // Navigate to page
  await page.goto('localhost:3000')
  await Promise.all([page.click('button'), page.waitForNavigation('load')
  ])
  // Log in
  expect(await page.url()).toMatch('https://dev-xfbt5qv8.au.auth0.com/')
  await page.fill('[type=email]', 'admin@safehouse.com')
  await page.fill('[type=password]', 'Iamtheadmin!')
  await page.click('button')
  await page.screenshot({ path: imgpath + 'adminsigninsuccess.png' })
  expect(await page.url()).toMatch('http://localhost:3000')
  // Click on add House button
  await page.click('text=ADD WHARE')
  await page.screenshot({ path: imgpath + 'adminaddhousebuttonsuccess.png' })
  expect(await page.url()).toMatch('http://localhost:3000/#/houses/add')
  // Drop down menu
  await page.selectOption('select#region', '2')
  await page.fill('#name', 'House Name')
  await page.fill('[name=phone_1]', '021 456 7894')
  await page.fill('[name=phone_2]', '021 455 7774')
  await page.fill('[name=notes]', 'Test notes')
  await page.click('text=NEXT')
  await page.screenshot({ path: imgpath + 'adminsubmitaddhousebuttonsuccess.png' })
  expect(await page.url()).toMatch('http://localhost:3000/#/rooms/add/')
})
