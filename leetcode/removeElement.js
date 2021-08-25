const test = [3,2,2,3];
const val = 3;

const test2 = [0,1,2,2,3,0,4,2];
const val2 = 2;

var removeElement = function(nums, val){
    let swapped = 0;
    let leftPointer = 0;
    let rightPointer = nums.length - 1;

    while (leftPointer !== (nums.length -1) - swapped){
        if(nums[leftPointer] === val){
            nums[leftPointer] = nums[rightPointer];
            nums[rightPointer] = '_'
            rightPointer--;
            swapped++;
        } else {
            leftPointer++
        }
    }
    return nums.length - swapped;
}

console.log(removeElement(test,val));
console.log(test)
