'use strict';

let CategorySelectors = require('./selectors.js').categorySelectors;

module.exports.categoryMethods = function categoryMethods() {
    let categorySelectors = new CategorySelectors();

    return {
        isTheCategoryNamePresent: () => {
            return categorySelectors.main.title().then((ele) => {
                return ele.isPresent();
            });
        },
        categoryTitleValue: () => {
            return categorySelectors.main.title().then((ele) => {
                return ele.getText();
            });
        },

        clickOnExpandAll: () =>   { categorySelectors.main.expandAll().click(); },
        clickOnCollapseAll: () => { categorySelectors.main.collapseAll().click(); },

        clickOnSaveButton: () =>             { categorySelectors.addEdit.tools.saveButton().click(); },

        clickOnCategoryNameField: () =>      { categorySelectors.addEdit.main.categoryName().click(); },
        enterCategoryName: (categoryName) => { categorySelectors.addEdit.main.categoryName().sendKeys(categoryName); },

        categoryNameValue: () =>             { return categorySelectors.addEdit.main.categoryName().getAttribute('value'); }
    }
};