'use strict';

let adminHelpers    = require('../../helpers/AdminHelpers.js').adminHelpers;
let categoryMethods = require('../../pageObjects/categories/methods.js').categoryMethods;
let Chance          = require('chance');

describe('You should be able to Add a New Category.', () => {
    beforeEach(() => {
        isAngularSite(false);
        this.adminHelpers    = new adminHelpers();
        this.categoryMethods = new categoryMethods();
        this.chance          = new Chance();

        this.categoryName = `RootCategory${this.chance.hash({ length: 10 })}`;

        this.adminHelpers.GoToAdminLogin();
        this.adminHelpers.LoginAsAdmin();
        this.adminHelpers.GoToCategoryAddPage();
    });

    afterEach(() => {
        this.adminHelpers.GoToAdminLogout();
    });

    it(' - Should allow you to Add a New Category.', () => {
        this.categoryMethods.enterCategoryName(this.categoryName);
        expect(this.categoryMethods.categoryNameValue()).toBe(this.categoryName);

        this.categoryMethods.clickOnSaveButton();
        browser.sleep(2000);

        expect(this.categoryMethods.categoryTitleValue()).toBe(this.categoryName);
    });
});