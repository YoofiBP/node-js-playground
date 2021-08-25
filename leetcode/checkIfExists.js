const arr = [7,1,14,11];
const halves = [];
let exists = false;

for (let i = 0; i < arr.length - 1; i++) {
    if(halves.includes(arr[i])){
        exists = true;
    }
    halves.push(arr[i]/2, arr[i]*2);

}

console.log(exists);