# Test Driven Development Code
I created this code to show a test-driven approach in creating a single module accompanied by its unit tests. The module is written in Typescript, and the test is written in Mocha and Chai. 
This is one of the technical tests from a tech company that I applied for. The solution that I provided here have successfully brought me to the next stage of the application.

## Task Brief:

A module is required that has an algorithm to find all pairs of integers within an array that sum to a specified value.

- The input should include the array of integers and the specified value.
- The output should include all pairs of integers that sum to the specified value.
- Think carefully about any error handling that may be required.
- Unit tests should be produced to ensure all functionality works as expected.

## Steps to configure and replicate the module and test scripts:

1. type 'npm i' in the terminal to install node_modules and dependencies
2. create index.tsx file to write the function that satisfies the task. export the function
3. create test/**.test.ts file to write the unit test for this function (note that the file name has to be **.test.ts and located in a folder called 'test' due to the specification in package.json file.)
   - in the test script, import the function and write the test for that function
4. Install type definition for the test runner : npm i --save-dev @types/mocha
5. create a tsconfig.json file to add 'mocha' to the types field. <-- this removes the 'Cannot find name 'describe'' error from typescript.
   - adding "jsx" : "react" in the tsconfig.json file removes another TS error related to JSX
6. type 'npm test'in the terminal to run the test script
7. add the following line in package.json (for TDD with watch mode)
   - "test:watch" : "mocha -r ts-node/register --watch --watch-files _.tsx, test/**/*/_.ts"
   - to run test script in watch mode, type 'npm run test:watch' in the terminal
8. to run multiple test parameters with test.each(), install mocha-each
   - npm install --save-dev mocha-each
   - then to remove TS error, npm i --save-dev @types/mocha-each
