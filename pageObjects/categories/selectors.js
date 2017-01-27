'use strict';

module.exports.categorySelectors = function categorySelectors() {
    let selectors = {
        addEditGeneralInfo: "div[data-index='general']"
    };

    return {
        main: {
            title: () =>       { return FindElement(by.className('page-title')); },
            expandAll: () =>   { return FindElement(by.css(".tree-actions a[onclick*='tree.expand']")); },
            collapseAll: () => { return FindElement(by.css(".tree-actions a[onclick*='tree.collapse']")); }
        },
        categoryTree: {
            name: (categoryName) => { return FindElements(by.xpath(`//span[contains(., "${categoryName}")]`)); }
        },
        addEdit: {
            tools: {
                saveButton:   () => { return FindElement(by.id('save')); }
            },
            main: {
                categoryName: () => { return FindElement(by.css(`${selectors.addEditGeneralInfo} .admin__field .admin__control-text`)); }
            }
        }
    }
};