const testArray = [0,1,0,3,12];
const testArray2 = [1]

var moveZeroes = function (arr) {
    let readPointer = 0;
    let writePointer = 0;

    while (writePointer < arr.length ){
        if(readPointer >= arr.length){
            arr[writePointer] = 0
            writePointer++
        }
        else if(arr[readPointer] !== 0){
            arr[writePointer] = arr[readPointer];
            writePointer++
        }
        readPointer++

    }
}

console.log(testArray2);
moveZeroes(testArray2);
console.log(testArray2)