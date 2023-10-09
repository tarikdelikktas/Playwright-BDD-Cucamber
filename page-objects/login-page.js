const { expect } = require("@playwright/test")

class LoginPage {

    async navigateToLoginScreen() {
        await page.goto("https://www.saucedemo.com/")
    }

    async submitLoginForm() {
        await page.fill('[data-test="username"]', 'standard_user')
        await page.fill('[data-test="password"]', 'secret_sauce')
        await page.click('[data-test="login-button"]')
    }

    async submitLoginFormWithParameters(username, password) {
        await page.fill('[data-test="username"]', username)
        await page.fill('[data-test="password"]', password)
        await page.click('[data-test="login-button"]')
    }

    async assertUserIsLoggedIn() {
        await page.waitForSelector('.inventory_list')
    }

    async pause() {
        await page.waitForTimeout(3000)
    }
}

module.exports = { LoginPage }