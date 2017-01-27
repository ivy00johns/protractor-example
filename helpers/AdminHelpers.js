'use strict';

let LoginMethods = require('../pageObjects/login/methods.js').adminLoginMethods;

function CloseUnsavedChangesAlert() {
    browser.driver.switchTo().alert().thenCatch(function (e) {
        // 27 maps to bot.ErrorCode.NO_MODAL_DIALOG_OPEN: http://selenium.googlecode.com/git/docs/api/javascript/source/lib/atoms/error.js.src.html#l31
        if (e.code !== 27) {
            // throw e;
        }
    }).then(function (alert) {
        if (alert) {
            alert.dismiss();
        }
    });
}

module.exports.adminHelpers = function adminHelpers() {
    let loginMethods = new LoginMethods();

    return {
        GoToAdminLogin: () => {
            browser.driver.get(browser.baseUrl);
            WaitForPageToLoad();
        },

        GoToAdminLogout: () => {
            browser.driver.get(`${browser.baseUrl}/admin/auth/logout`);
            WaitForPageToLoad();
        },

        GoToCategoryListPage: () => {
            browser.driver.get(`${browser.baseUrl}/catalog/category/`);
            WaitForPageToLoad();
            browser.sleep(500);
        },

        GoToCategoryAddPage: () => {
            browser.driver.get(`${browser.baseUrl}/catalog/category/add/store/0/parent/1`);
            WaitForPageToLoad();
            browser.sleep(500);
        },

        LoginAsAdmin: (credentials) => {
            if (credentials) {
                loginMethods.enterUsername(credentials.username);
                loginMethods.enterPassword(credentials.password);
            } else {
                loginMethods.enterUsername(browser.params.adminCredentials.username);
                loginMethods.enterPassword(browser.params.adminCredentials.password);
            }

            loginMethods.clickOnSignInButton();
            WaitForPageToLoad();
        }
    }
};