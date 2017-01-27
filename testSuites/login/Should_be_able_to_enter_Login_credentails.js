'use strict';

let adminHelpers = require('../../helpers/AdminHelpers.js').adminHelpers;
let loginMethods = require('../../pageObjects/login/methods.js').adminLoginMethods;

describe('You should be able to enter Login credentials on the Admin Login page.', () => {
    beforeEach(() => {
        isAngularSite(false);
        this.adminHelpers = new adminHelpers();
        this.loginMethods = new loginMethods();

        this.adminHelpers.GoToAdminLogin();
    });

    it(' - Should allow you to enter your Login credentials.', () => {
        this.loginMethods.enterUsername('test');
        expect(this.loginMethods.usernameValue()).toBe('test');
    });
});