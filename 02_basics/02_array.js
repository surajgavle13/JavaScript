const marvel_heroes=["thor","Ironman","spiderman"]
const dc_heroes=["superman","batman","flas"]

//marvel_heroes.push(dc_heroes)// using this method push or merge the ds_heroes array in marvel_heroes but push another array as array because array takes any data so after pushing 2nd array into 1starray, 1st array takes 2ndarray as data.
//console.log(marvel_heroes)// op-[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'batman', 'flas' ] ]// second array treat as one elemet
//console.log(marvel_heroes[3][1])// it return 1st value in 3rd element // op- batman

const allHeroes=marvel_heroes.concat(dc_heroes)// conact method concat two array
console.log(allHeroes)// op-[ 'thor', 'Ironman', 'spiderman', 'superman', 'batman', 'flas' ] 

// push vs concat
// push method push the array on existing array but concat method retrun new array

const all_new_heroes=[...marvel_heroes, ...dc_heroes]// this is spread method using this method we spread the array's element
console.log(all_new_heroes)

// concat vs spread(...)
// concat and spread works same but using concat we merge only two array into another array but using spread we can merge multiple array in another array

const another_array=[1,2,3,[4,5,6],7,[6,7[4,5]]]

const real_another_array= another_array.flat(Infinity)// flat method return the new array with sub array by spreading all elements
console.log(real_another_array)//

console.log(Array.isArray("suraj"))// 'Array.isArray' method checks data is array or not and give result in true or false
console.log(Array.from("suraj"))// 'Array.from' this method converts data in array // op-[ 's', 'u', 'r', 'a', 'j' ] 
console.log(Array.from({name:"suraj"}))// return wmpty array // interestin // op-[]

let score1= 100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))//'Array.of method return new array from set of elements and convert multiple elements in array' // op-[ 100, 200, 300 ]



