'use strict';

let secrets = require('./secrets.js');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    exclude: [],

    suites: {
        'categories' : 'testSuites/categories/*.js',
        'login': 'testSuites/login/*.js'
    },

    capabilities: {
        'browserName'   : 'chrome',
        'chromeOptions' : {
            'args' : [
                'start-maximized',
                'incognito',
                'disable-extensions',
                'enable-crash-reporter-for-testing'
            ]
        }
    },

    // No trailing slashes
    baseUrl: 'http://127.0.0.1:32769/admin',

    rootElement: 'body',

    allScriptsTimeout: 99999,
    getPageTimeout: 35000,

    framework: 'jasmine2',

    onPrepare: () => {
        // Maximize browser window.
        setTimeout(() => {
            browser.driver.executeScript(() => {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                };
            }).then((result) => {
                browser.driver.manage().window().setSize(result.width, result.height);
            });
        });

        // Compatibility with non-Angular pages.
        global.isAngularSite = (flag) => {
            browser.ignoreSynchronization = !flag;
        };

        global.FindElement = (selector) => {
            return browser.driver.findElement(selector);
        };

        global.FindElements = (selector) => {
            return browser.driver.findElements(selector);
        };

        global.WaitForPageToLoad = (timeDelay) => {
            if (timeDelay == null || timeDelay == '') {
                timeDelay = 5000;
            }

            return browser.driver.wait(function() {
                return browser.driver.getCurrentUrl().then(function(url) {
                    return url;
                });
            }, timeDelay);
        };

        // Disable Angular Animate and CSS Animate
        let disableNgAnimate = () => {
            angular
                .module('disableNgAnimate', [])
                .run(['$animate', ($animate) => {
                    $animate.enabled(false);
                }]);
        };

        let disableCssAnimate = () => {
            angular
                .module('disableCssAnimate', [])
                .run(() => {
                    let style = document.createElement('style');
                    style.type = 'text/css';
                    style.innerHTML = '* {' +
                        '-webkit-transition: none !important;' +
                        '-moz-transition: none !important' +
                        '-o-transition: none !important' +
                        '-ms-transition: none !important' +
                        'transition: none !important' +
                        '}';
                    document.getElementsByTagName('head')[0].appendChild(style);
                });
        };

        browser.addMockModule('disableNgAnimate', disableNgAnimate);
        browser.addMockModule('disableCssAnimate', disableCssAnimate);
    },

    params: {
        adminCredentials: secrets.adminCredentials
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose : true,

        // Use colors in the command line report.
        showColors: true,

        // If true, include stack traces in failures.
        includeStackTrace : true,

        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 45000,

        // If true, print timestamps for failures
        showTiming: true,

        // Print failures in real time.
        realtimeFailure: true
    }
};