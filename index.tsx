//A module is required that has an algorithm to find all pairs of integers within an array that sum to a specified value.
    //write a function that is exported 
    //write a jest/mocha test script 
    

// - The input should include the array of integers and the specified value.
    
// - The output should include all pairs of integers that sum to the specified value.
        //outputs an array of integer pairs. example: [[1,2], [-1,4]] OR [(1,2), (-1,4)]
        //integer pair can be written in an array [1,2] OR concatenate in a string like this '(1,2)'?

// - Think carefully about any error handling that may be required.
        //if there is no sum that equals to the given value - this should return a NaN or an error statement
        //assume that input arguments are always valid (contains array of integers). otherwise, return NaN

// - Unit tests should be produced to ensure all functionality works as expected.



export function sumOfPairs(input : number[], value : number ) : number[][] | number | string {
    
    //function for array.every method.
    //checks each element and returns true if it is a number
    function isNumber (element : any){
        return typeof(element)==='number'
    }

    //if input argument is not a number array, do not run the code. return NaN
    if(input.every(isNumber) && typeof(value) === 'number'){
        
        //initialize an empty array
        let arr = [];

        //loop through each index and compute the sum of two numbers in neighboring index
        for(let i = 0; i < input.length; i++){
            for (let j = i+1; j < input.length; j++){
                let sum = input[i]  + input[j]

                //if sum is equals the given value, add the pairs to the array
                if(sum === value){
                    //create an array of the pairs
                    const pairs = [input[i],input[j]]

                    //push the pairs into the returning array
                    arr.push(pairs)
                }
            }
                
        }

        //if array is empty, return an error statement
        if(arr.length === 0){
            return `Number pairs that sums up to ${value} do not exist in the array`
        }else {
            return arr
        }
        


    } else {
        return NaN
    }
    
    

}