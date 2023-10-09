class LoginPage {
    async navigateToLoginScreen() {
        await page.goto("https://www.saucedemo.com/")
    }

    async submitForm() {
        await page.fill('[data-test="username"]', 'standard_user')
        await page.fill('[data-test="password"]', 'secret_sauce')
        await page.click('[data-test="login-button"]')
    }

    async assertUserIsLoggedIn() {
        await page.waitForSelector('.inventory_list')
    }
}

module.exports = { LoginPage }