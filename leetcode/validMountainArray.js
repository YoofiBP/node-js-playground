var validMountainArray = function(arr){
    if(arr.length < 3){
        return false;
    }

    let pivot;
    let lpointer = 0;
    let rpointer = 1;
    let isMountain = true;

    //if pivot at beginning
    if(arr[0] > arr[1]){
        return false;
    }

    while (isMountain && rpointer !== arr.length){
        if(!pivot && rpointer === arr.length -1){
            if(arr[lpointer] < arr[rpointer]){
                isMountain = false;
            }
        }
        if (pivot){
            if(arr[rpointer] < arr[lpointer]){
                lpointer++;
                rpointer++;
            } else {
                isMountain = false;
            }
        } else {
            //non pivot reached
            if(arr[rpointer] > arr[lpointer]){
                lpointer++;
                rpointer++;
            }else {
                pivot = arr[lpointer]
            }
        }
    }

    return isMountain;
}

const mountainArray = [0,2,3,4,5,2,1,0];
// const regularArray = [0,2,3,3,5,2,1,0];
const regularArray = [0,1,2,3,4,5,6,7,8,9]


console.log(validMountainArray(regularArray))