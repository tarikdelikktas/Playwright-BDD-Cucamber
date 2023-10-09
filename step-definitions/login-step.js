const { Given, When, Then, defineStep } = require("@cucumber/cucumber")
const { LoginPage } = require('../page-objects/login-page').default

const loginPage = new LoginPage()

defineStep('I visit a login page', async function () {
    await loginPage.navigateToLoginScreen()
})

defineStep('I fill the login form with valid credentials', async function () {
    await loginPage.submitForm()
})

defineStep('I should see the home page', async function () {
    await loginPage.assertUserIsLoggedIn()
})
