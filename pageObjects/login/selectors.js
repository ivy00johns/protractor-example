'use strict';

module.exports.adminLoginSelectors = function LoginSelectors() {
    return {
        login: {
            username: () =>     { return FindElement(by.id('username')); },
            password: () =>     { return FindElement(by.id('login')); },
            signInButton: () => { return FindElement(by.className('action-login')); }
        }
    }
};