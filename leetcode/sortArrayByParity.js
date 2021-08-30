const testArray = [3,1,2,4]
const testArray2 = [0]

var getEvens = (nums) => {
    let counter = 0;
    nums.forEach(num => {
        if(num % 2 === 0){
            counter++;
        }
    })

    return counter;
}

var sortArrayByParity = function (nums) {
    const numberOfEvenNumbers = getEvens(nums);
    let readPointer = 0;
    let writePointer = 0;

    while (writePointer < numberOfEvenNumbers) {
        if(nums[readPointer] % 2 === 0){
            const temp = nums[writePointer];
            nums[writePointer] = nums[readPointer];
            nums[readPointer] = temp;
            readPointer++;
            writePointer++;
        }else {
            readPointer++;
        }

    }

    return nums;
}

console.log(testArray)
console.log(sortArrayByParity(testArray))