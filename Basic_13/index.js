// Print 1-255

function print1To255(){
    for(var i = 1; i <= 255; i++){
        console.log(i)
    }
}
print1To255()
    

// Print Odds 1-255

function printOdds1To255(){
    for(var i = 1; i < 256; i += 2)
        console.log(i)
}
printOdds1To255()

// Print Ints and Sum 0-255

function printIntsAndSum0To255(){
    var sum = 0;
    for(i = 0; i < 256; i++){
        sum = sum + i;
        console.log(sum +i)
    }
}
printIntsAndSum0To255()

// Iterate and Print Array

function iterateAndPrintArray(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
iterateAndPrintArray([1,2,3,4])
    
// Find and Print Max of Array

function findAndPrintMax(arr){
    var max = arr[0];
    for(var i = 0;i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
            console.log(max)
    }
}

// Get and Print Average

function getAndPrintAvg(arr){

    for(var i = 0; i < arr.length; i++){
        var sum = 0;
        sum = sum + arr[i];
        console.log(sum / arr.length)
    }
}

// Array with Odds

function arrayWithOdds1To255(){
    var arr = [];
    for(var i = 1; i < 256;i += 2){
        console.log(i)
    }

}
arrayWithOdds1To255()

// Square the Values

function squareTheValues(arr){
    for(var i = 0;i > arr.length;i++){
    arr[i] = arr[i] * arr[i];
    console.log(arr)
    }
}

// Greater than Y

function greaterThanY(arr,Y){
    var count = 0;
    for(var i = 0;i < arr.length;i++){
        if(arr[i] > Y){
            count = count + 1;
        }
        console.log(count)
    }
}






