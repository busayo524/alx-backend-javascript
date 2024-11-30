0x06. Unittests in JavaScript

This project involves writing and running unit and integration tests in JavaScript using frameworks such as Mocha, Chai, and Sinon. It demonstrates best practices in testing, including using assertion libraries, handling async code, employing spies and stubs, and creating robust test suites for both unit and integration testing.
Learning Objectives

By the end of this project, you should be able to:

    Use Mocha to write test suites.
    Work with different assertion libraries like Node's assert and Chai.
    Organize and present large test suites effectively.
    Use spies and stubs for testing functionality.
    Understand and utilize hooks in testing.
    Write unit tests for async functions.
    Perform integration tests with a small Node.js server.

Project Requirements

    Environment: Ubuntu 18.04, Node.js 12.x.x.
    Editors: vi, vim, emacs, Visual Studio Code.
    File Structure: All files should end with a new line.
    Extensions: .js for all JavaScript files.
    Testing: Use npm test to run test files, ensuring no warnings or errors.
    Frameworks/Modules: Mocha, Chai, Sinon, and Request.

Resources

    Mocha Documentation
    Chai Documentation
    Sinon Documentation
    Express Documentation
    Request Module
    Testing Node.js Apps using Mocha, Chai, and Sinon

Project Tasks
0. Basic Test with Mocha

    File: 0-calcul.js, 0-calcul.test.js
    Objective: Create a function calculateNumber that rounds two numbers and returns their sum. Write unit tests using Mocha and Node.js's assert.

1. Combining Descriptions

    File: 1-calcul.js, 1-calcul.test.js
    Objective: Extend calculateNumber to support operations SUM, SUBTRACT, and DIVIDE. Use describe blocks to organize test cases.

2. Chai Assertion Library

    File: 2-calcul_chai.js, 2-calcul_chai.test.js
    Objective: Rewrite 1-calcul.test.js using Chai's expect API for assertions.

3. Spies

    File: utils.js, 3-payment.js, 3-payment.test.js
    Objective: Use Sinon spies to track calls to Utils.calculateNumber.

4. Stubs

    File: 4-payment.js, 4-payment.test.js
    Objective: Replace expensive or external function calls with stubs using Sinon. Validate arguments and outputs while mocking return values.

5. Hooks

    File: 5-payment.js, 5-payment.test.js
    Objective: Use beforeEach and afterEach hooks to set up and tear down shared test data. Create concise tests for a payment processing function.

6. Async Tests with Done

    File: 6-payment_token.js, 6-payment_token.test.js
    Objective: Test async code using the done callback in Mocha to validate a function that returns promises.

7. Skipped Tests

    File: 7-skip.test.js
    Objective: Skip failing tests to allow others to execute without removing or altering the broken test cases.

8. Basic Integration Testing

    Folder: 8-api
    Files: package.json, api.js, api.test.js
    Objective: Build an Express.js API and test its / route using integration tests.

9. Regex Integration Testing

    Folder: 9-api
    Files: api.js, api.test.js
    Objective: Extend integration tests to validate dynamic routes with regex.

How to Run the Project

1. Clone the Repository:
git clone https://github.com/busayo524/alx-backend-javascript.git
cd alx-backend-javascript/0x06-unittests_in_js
2. install Dependencies
npm install
3. run tests
npm test

Author

This project is part of the ALX Software Engineering program.
