'use strict';

let adminHelpers = require('../../helpers/AdminHelpers.js').adminHelpers;
let loginMethods = require('../../pageObjects/login/methods.js').adminLoginMethods;

describe('You should be able to Login on the Admin Login page.', () => {
    beforeEach(() => {
        isAngularSite(false);
        this.adminHelpers = new adminHelpers();
        this.loginMethods = new loginMethods();

        this.adminHelpers.GoToAdminLogin();
    });

    afterEach(() => {
        this.adminHelpers.GoToAdminLogout();
    });

    it(' - Should allow you to Login.', () => {
        this.loginMethods.enterUsername(browser.params.adminCredentials.username);
        this.loginMethods.enterPassword(browser.params.adminCredentials.password);
        this.loginMethods.clickOnSignInButton();

        expect(browser.driver.getCurrentUrl()).toBe(`${browser.baseUrl}/admin/dashboard/`);
    });
});