/*const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];

const m = 3;
const n = 3;*/

/*const nums1 = [1];
const nums2 = [];

const m = 1;
const n = 0;*/

const nums1 = [0];
const nums2 = [1];

const m = 0;
const n = 1;

const merge = (nums1, m , nums2, n) => {
    const objm = {};
    const objn = {};

    let destination = 0;

    let mpointer = 0;
    let npointer = 0;

    for (let i = 0; i <= nums1.length - 1; i++) {
        if(mpointer >= m ){
            objn[destination] = nums2[npointer];
            npointer++;
        }
        else if(nums1[mpointer] < nums2[npointer] || nums2[npointer] === undefined){
            objm[destination] = nums1[mpointer];
            mpointer++;
        } else {
            objn[destination] = nums2[npointer];
            npointer++
        }

        destination++
    }

    for (let i = 0; i < nums1.length; i++) {
        if(objm[i]){
            nums1[i] = objm[i]
        } else {
            nums1[i] = objn[i]
        }
    }
}


merge(nums1, m, nums2, n);

console.log(nums1);



