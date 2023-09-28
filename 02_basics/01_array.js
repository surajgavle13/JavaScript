// array

const myArr=[0,1,2,3,4,5] //declaring array

const myArr2= new Array(1,2,3,4)// we can declare array like this also
console.log(myArr[0])// accessing the element from array


// Array methods

myArr.push(6) // push the value in last
myArr.pop()// pop method remove last element

myArr.unshift(0)// add element to first
myArr.shift()// remove first element

console.log(myArr.includes(9))// this method check is the given value present in array or not and result will show in boolean
console.log(myArr.indexOf(3))// this method checks on given position index which value is present if value is exist in array then return value but value dosen't exist in array then return -1
console.log(myArr.indexOf(9))// return -1
console.log(myArr)

const newArr= myArr.join()// using join method we can convert array in string

console.log(myArr)// op-[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr)// op-0,1,2,3,4,5 and type of is string

// slice, splice

 //what is differnce between slice and splice?
// - suppose we used slice method then except last element which has given in method all element print from start and dosen't change original array
//   ex-slice(1,3) then from index1 to index2 elements will return and dont chane original array
//  - suppose we used splice method then from first element to last element will return which has defined by us in splice method but change original array also.in original array that portion will remove which has defined in splice method
//    ex- splice(1,3) then from index 1 to index 2 elements will return but  original array will also return except index1 to index2 element.

// example is below

console.log("A", myArr);// op-A [ 0, 1, 2, 3, 4, 5 ]

const myn1=myArr.slice(1,3)// slice method exclude last element which has given in method and return value op-[ 1, 2 ]

console.log(myn1)// op-[ 1, 2 ]
console.log("B",myArr);// and we have origenal array also 

const myn2=myArr.splice(1,3)// splice method include last element which has given in method and return value op-[ 1, 2, 3 ]
console.log("c",myArr)// op-c [ 0, 4, 5 ] because of splice method from orijanal array remove the portion which was defined in splice method (splice(1,3))
console.log(myn2)// op-[1,2,3]









