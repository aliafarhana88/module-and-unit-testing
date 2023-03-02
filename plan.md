## Task Brief:

A module is required that has an algorithm to find all pairs of integers within an array that sum to a specified value.

- The input should include the array of integers and the specified value.
- The output should include all pairs of integers that sum to the specified value.
- Think carefully about any error handling that may be required.
- Unit tests should be produced to ensure all functionality works as expected.

## Steps to configure the module and test scripts:

1. type 'npm i' in the terminal to install node_modules and dependencies
2. create index.tsx file to write the function that satisfies the task. export the function
3. create test/**.test.ts file to write the unit test for this function (note that the file name has to be **.test.ts and located in a folder called 'test' due to the specification in package.json file.)
   - in the test script, import the function and write the test for that function
4. Install type definition for the test runner : npm i --save-dev @types/mocha
5. create a tsconfig.json file to add 'mocha' to the types field. <-- this removes the 'Cannot find name 'describe'' error from typescript.
   - adding "jsx" : "react" in the tsconfig.json file removes another TS error related to JSX
6. type 'npm test'in the terminal to run the test script
7. add the following line in package.json (for TDD with watch mode)
   - "test:watch" : "mocha -r ts-node/register --watch --watch-files _.tsx, test/\*\*/_.ts"
   - to run test script in watch mode, type 'npm run test:watch' in the terminal
8. to run multiple test parameters with test.each(), install mocha-each
   - npm install --save-dev mocha-each
   - then to remove TS error, npm i --save-dev @types/mocha-each

## Plan for TDD

1. write an empty function in index.tsx
   - let the function retuns a value of 0
2. write a simple mock test in test.ts file.
   - import the function into the test file
   - hardcode the test to pass, assert the return value to be 0.
3. run the test script and ensure that there is no error in running the code
4. refactor test.ts file with mock tests that satisfies the task brief
5. run the test script with automatic rerun when module script is changed : npm run test -- --watch
6. expect red, then refactor the function until its green

## refactor

- look for a matcher that is suitable for an ouput of array on numbers (assert.equal do not work)
  - to.equal works for interger
  - to.contain works to check the existence of a single integer in an array
  - to.include.members works to check if the target is a superset of the set
  - to.eql works for array of numbers array. it asserts that the target is deeply equal to value. (but the arrays have to be in exact order)
