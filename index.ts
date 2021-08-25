const arr1 = ["amma", "kojo", "mensa", "eunice", "abena"];
const arr2 = ["mensa", "amma", "james", "richard"];
const arr3 = [];

const getSimilar = (arr1, arr2) => {
    const larger = arr1.length > arr2.length ? arr1 : arr2; // Get larger
    const similar = larger.filter(elem => arr2.includes(elem)) //O(n^2)
    return similar;
}

//["ama", "kojo", "mensa", "eunice", "abena", "mensa", "ama", "james", "richard"]

const newFunction = (arr1,arr2) => {
    const combined = arr1.concat(arr2)
    let same = []
    let different = []
    let nameCount = {};
    combined.forEach(element => {
        if(nameCount[element]){
            nameCount[element] = nameCount[element] + 1
        } else {
            nameCount[element] = 1
        }
    });// end loop
    Object.keys(nameCount).forEach(key => {
        if(nameCount[key] > 1){
            same.push(key)
        } else {
            different.push(key)
        }
    })
    return [same, different];
    // O(n)
}

//console.log(newFunction(arr1,arr2))


//describe(New Function tests)
//it(Should return similar in index 1 and different index 2)
console.log(newFunction(arr1,arr2)[0].length === ["amma" , "mensa"].length && newFunction(arr1,arr2)[1].length === [
    "kojo",
    "eunice",
    "abena",
    "james",
    "richard"
    ].length) 
//console.log(newFunction(arr1, arr2))

//names with more than one count go into arr index 0
//names with only one count go into arr index 1
/**
 * 
 * [
"kojo",
"eunice",
"abena",
"james",
"richard"
]
 */

//console.log(getSimilar(arr1,arr2))
//return
/*
[amma, mensa]
*/