const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')

const loginPage = require('../pageobjects/login.page');
const mainPage = require('../pageobjects/main.page');

Given(/^I am on the (\w+) page$/, async (page) => {
    await loginPage.open()
});

When(/^I enter (.+) and (.*)$/, async (username, password) => {
    await loginPage.login(username, password)
});

Then(/^I should be in the page main$/, async () => {
    await expect(mainPage.mainTitle).toBeExisting();
    await expect(mainPage.mainTitle).toHaveText("Portal de Autogestión");
});

Then(/^I should see a login error saying (.*)$/, async (message) => {
    await expect(loginPage.loginMessage).toBeExisting();
    await expect(loginPage.loginMessage).toHaveText(message);
});

Then (/^I should see a cuit error saying (.*)$/, async (message) => {
    await expect(loginPage.loginCuitErrorMessage).toBeExisting();
    await expect(loginPage.loginCuitErrorMessage).toHaveText(message);
});

Then (/^I should see a password error saying (.*)$/, async (message) => {
    await expect(loginPage.loginPasswordErrorMessage).toBeExisting();
    await expect(loginPage.loginPasswordErrorMessage).toHaveText(message);
});