UI tests for the Swag Labs application using the Playwright framework.

The Page Object Model (POM) pattern is used.

All tests are located in the tests directory.

Tests are executed in parallel on two browsers:

Chrome
Firefox

Environment configuration is currently handled via the ENV variable in the playwright.config.ts file.

To run all tests:

npx playwright test

To run a specific test by name:

npx playwright test -g "session persists after reload"