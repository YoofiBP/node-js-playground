/*function sortedSquares(nums){
    var outputArray = [];
    nums.forEach(num => outputArray.push(num**2));
    return outputArray;
}*/

const testArray = [-4,-1,0,3,10];

var squared = sortedSquares(testArray);

function swap(array, indexOne, indexTwo){
    var tempBucket = array[indexTwo];
    array[indexTwo] = array[indexOne];
    array[indexOne] = tempBucket;
}

function selectionSort(array){
    var swapPosition = 0;
    var cursorPosition = 1;
    var currentMinIndex = 0;

    while(swapPosition !== array.length-2){
        if(array[cursorPosition] < array[currentMinIndex]){
            currentMinIndex = cursorPosition
        }

        cursorPosition++;

        if(cursorPosition === 20){
            console.log("stop")
            break;
        }

        if(cursorPosition === array.length-1){
            swap(array, swapPosition, currentMinIndex)
            swapPosition++
            cursorPosition = swapPosition + 1;
            currentMinIndex = swapPosition
            console.log(`Swap Position:${swapPosition}`)
        }
    }
}

function sortedSquares(nums){
    const destinationArray = [];
    let leftPointerIndex = 0;
    let rightPointerIndex = nums.length - 1;

    while (destinationArray.length !== nums.length){
        if(nums[leftPointerIndex]**2 > nums[rightPointerIndex]**2){
            destinationArray.unshift(nums[leftPointerIndex]**2)
            leftPointerIndex++;
        } else {
            destinationArray.unshift(nums[rightPointerIndex]**2)
            rightPointerIndex--;
        }

        if(leftPointerIndex === rightPointerIndex){
            destinationArray.unshift(nums[leftPointerIndex]**2)
        }
    }
    return destinationArray;
}

console.log(testArray)
console.log(sortedSquares(testArray))
