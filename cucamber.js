const command = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.step.js
`

module.exports = {
    default: `${command} features/**/*.feature`
}