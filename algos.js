
// Given an Array print amount of positive numbers in Array

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for(var i = 0; i <= numbers.length; i++){
    if(numbers[i] >= 0){
        countPositives += 1;
    }
}
    
// your code here!
    
console.log("there are " + countPositives + " positive values");

// REVERSE AN ARRAY
// CREATE A FUNCTION WHERE GIVEN AN ARRAY YOU REVERSE THE ARRAY AND RETURN THE ARRAY
// ["a", "b", "c", "d", "e"] => ["e", "d", "c", "b", "a"]

// CREATE A FUNCTION WRAPPER (1 param / array type)
// ITERATE THROUGHT ARRAY (FOR LOOP)
// NEED A TEMP VARIABLE TO STORE A VALUE
// SWAP THE VALUES WITHIN THE ARRAY
// RETURN THE ARRAY