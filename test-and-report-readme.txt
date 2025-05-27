
#### Test execution ####

- The commands configured for the exection of the tests can be seen in the package.json file on the root directory of the project, under the scripts node of the json.
    -> npm run test: SetUp the Cypress interface to follow up the test execution on screen.
    -> npx cypress run --env allure=true: Run the test with the Allure-Report, making it possible to get an output report of the test run. It does not gives any visual feedback of the screen on run.
    -> npm run allure:clear_results: Clear the results for Allure-Report.
    -> alure serve: Sets up the Allure-Report server, so the test reports and dashboards can be seen.
