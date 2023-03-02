//import sumOfPairs function from index.tsx
//write a test script
//test with variety of inputs (valid and invalid input): 
        //array of integers and a specified value (valid input)
        //array of non integers and a specified value (invalid, should throw error)
        //array of integers and a non integer value (invalid, should throw error)
        //array of zeros 
        //include positive and negative numbers
//write one test function and use test.each to supply different imput parameters

import {sumOfPairs} from '../index';
import {assert, expect} from 'chai';
//import {forEach} from 'mocha-each';
import forEach = require ("mocha-each")


forEach([[[1,1,-1,-4,-2,4], 2, [[1,1],[-2,4]]],
    [[0,0,0,0], 0, [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]],
    [[20,30,10,10,10], 40, [[30,10],[30,10],[30,10]]],
    [[0,'a',1,1], 2, NaN],
    [[0,10,1,1], 3, "error statement"]
])
.describe("test for sumOfPairs function", (inputArray,value, expected)=>{
     // %d should find pairs that sum up to %d then returns %d

        //Arrange- define test parameters (input variables)
            // const inputArray = [1,1,-1,-4,-2,4];
            // const value = 2; 
    
         //Act - plug into function
         const actual = sumOfPairs(inputArray, value);
         
         //Assert
            // const expected = [[1,1],[4,-2]]; 

    it(`[${inputArray}] should find pairs that sum up to ${value} and returns [${expected}]`, () =>{
        //this test checks for pairs inside the return array

            //do not do this check if function returns a string
            if(typeof(expected) != 'string'){
            //assert.equal(actual,expected);
            expect(actual).to.eql(expected);
            }
    })

    //another test script to count the sum of each number pairs and check that it equals to the given value. 
    it(`sum of each pair in [${actual}] should equals to ${value} (not applicable to NaN)`, ()=>{
        
        //run this check only if the function returns an array
        if (typeof(actual) != 'number'&& typeof(actual) != 'string' ){
        
            //compute the sum of each pair
            for (let i=0; i<actual.length; i++){
                let pairsArray = actual[i];
                let sum = pairsArray.reduce(function(a,b){
                    return a + b
                })
        
        
            //assert that it equals to the input value
            expect(sum).to.equal(value)
        
            }
        }
    })

    it(`if [${inputArray}] do not have number pairs that sums up to ${value}, it returns an error string`, ()=>{
        //only run this check for specific test value
        if(typeof(expected) === 'string'){
            expect(actual).to.be.a('string')
        }
    })

    
})



