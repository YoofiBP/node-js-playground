const testArr = [17,18,5,4,6,1]
const arr2 = [400]

var replaceElements = function(arr){
    let l = 0;
    let r = 1;
    let max = 0;

    while (l !== arr.length -1){
        while (r < arr.length){
            if(arr[r] > max){
                max = arr[r]
            }
            r++;
        }
        arr[l] = max;
        l++;
        r = l + 1;
        max=0;
    }
    arr[arr.length - 1] = -1;

    return arr;
}

console.log(arr2);
replaceElements(arr2);
console.log(arr2);