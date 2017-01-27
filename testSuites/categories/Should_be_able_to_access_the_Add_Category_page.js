'use strict';

let adminHelpers = require('../../helpers/AdminHelpers.js').adminHelpers;

describe('You should be able to access the Add New Category landing page.', () => {
    beforeEach(() => {
        isAngularSite(false);
        this.adminHelpers = new adminHelpers();

        this.adminHelpers.GoToAdminLogin();
        this.adminHelpers.LoginAsAdmin();
        this.adminHelpers.GoToCategoryAddPage();
    });

    afterEach(() => {
        this.adminHelpers.GoToAdminLogout();
    });

    it(' - Should allow you to access the Add New Category page.', () => {
        expect(browser.driver.getCurrentUrl()).toBe(`${browser.baseUrl}/catalog/category/add/store/0/parent/1`);
    });
});