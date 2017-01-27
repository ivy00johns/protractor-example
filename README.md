# Welcome to the example Protractor based Test Suite!

## Prereqs
* Protractor is a NodeJS based application so you will need to have NodeJS installed in order to run the following. Please visit [NodeJS](https://nodejs.org/en/) for installation instructions.

* The Test Suite requires a `secrets.js` file in the `protractor` directory with the Username/Password for an active Admin Account listed. Please use the following setup in your `secrets.js` file:
    ```
    'use strict';
    
    module.exports = {
        adminCredentials: {
            username: '',
            password: ''
        }
    };
    ```

## Conf.js
* `conf.js` is the file that contains all of the settings for the Test Suite. In that file you can set the `baseUrl`:
    
    ```
    ...
    baseUrl: 'http://127.0.0.1:32769/admin',
    ...
    ```

## Running the Tests
* Once you have NodeJS installed open a Terminal Window. You will need to install the Project Dependencies using the following command:
    ```
    npm install
    ```

* Next make sure Selenium WebDriver/ChromeDriver are up-to-date using the following command:
    ```
    webdriver-manager update
    ```
    
* Next you will need to start a WebDriver server so we can run the tests. Start the server using the following command:
    ```
    webdriver-manager start
    ```
    
* Open a new Terminal Window. 

* Finally to kick off the entire E2E Test Suite run the following command:
     ```
     protractor conf.js
     ```
     
* To run a sub-set of Tests run one of the following commands:
    ```
    protractor conf.js --suite category
    ```
    
    ```
    protractor conf.js --suite login
    ```