'use strict';

let AdminLoginSelectors = require('./selectors.js').adminLoginSelectors;

module.exports.adminLoginMethods = function adminLoginMethods() {
    let adminLoginSelectors = new AdminLoginSelectors().login;

    return {
        enterUsername: (username) => { adminLoginSelectors.username().sendKeys(username); },
        enterPassword: (password) => { adminLoginSelectors.password().sendKeys(password); },

        usernameValue: () =>         { return adminLoginSelectors.username().getAttribute('value'); },

        clickOnSignInButton: () =>   { adminLoginSelectors.signInButton().click(); }
    }
};