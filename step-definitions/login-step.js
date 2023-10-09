const { Given, When, Then, defineStep } = require("@cucumber/cucumber")

defineStep('I visit a login page', async function () {
    await page.goto("https://www.saucedemo.com/")
})

defineStep('I fill the login form with valid credentials', async function () {
    await page.fill('[data-test="username"]', 'standard_user')
    await page.fill('[data-test="password"]', 'secret_sauce')
    await page.click('[data-test="login-button"]')
})

defineStep('I should see the home page', async function () {
    await page.waitForSelector('.inventory_list')
})