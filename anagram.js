const arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];

let anagrams = {}
let tampung =[]

/** this function will sort array by alphabetical value */
function sortedArray(arr) {
    return arr.split("").sort().join("")
}

/** this function will check whether sorted array has a same value (duplicate) or not and data will be pushed into anagram object*/
function checkSorted(arr) {
    for (let key in arr) {
        let sortedVal = sortedArray(arr[key])
        if(anagrams[sortedVal]!= null){
            anagrams[sortedVal].push(arr[key])
        } else {
            anagrams[sortedVal]= [arr[key]]
        }
    }

}
/** this function will return key of object anagram and push into emptya array in tampung variable */
function groupingSorted() {
    checkSorted(arr)
    for (let key in anagrams) {
        tampung.push(anagrams[key])
    }
}

/** calling groupingSorted as well as checkSorted() and sortedArray, recursive method */
groupingSorted()
console.log(tampung);


