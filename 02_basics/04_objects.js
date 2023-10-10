// objects

//const tinderUser= new Object()// this is singleton object declaration  op-{}     note-you can not declare two time same vairable 

const tinderUser={}//this is nonsingleton object op-{}   

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn= false
console.log(tinderUser)// op-{ id: '123abc', name: 'sammy', isLoggedIn: false }

// we can also declare objects in objects as follows

const regularUser={
    email:"suraj@gmail.com",
    fullName:{
        userFullname:{
            firstname:"suraj",
            lastname:"gavle"
        }
    }
}

console.log(regularUser)// this return full object 
console.log(regularUser.fullName)// using this method we can access only fullNmae object which is defined in regularUser  op-{ userFullname: { firstname: 'suraj', lastname: 'gavle' } }
console.log(regularUser.fullName.userFullname)// using this we can access only userFullname object  op-{ firstname: 'suraj', lastname: 'gavle' }
console.log(regularUser.fullName.userFullname.firstname)// using this we can access particular element op-suraj

// we can combine also object like array as follow

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

const obj3={obj1, obj2}// we combine array using this method but it combines object into object ex-op-{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj3)// op-{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const objreturned=Object.assign(obj1,obj2)// copy the values of all of the enumerable own properties from one or more source objects to target object.Returns the target object. obj2 values goes on obj1
console.log(objreturned)//op-{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }    

// if there are morethan two objects the we can use following method to combine an object
 const obj4={5:"a",6:"b"}
 const obj5={7:"a",8:"b"}
 const obj6={9:"a",10:"b"}
const objreturned2=Object.assign({},obj4,obj5,obj6)// it combines all obj and return in target .// {}- this is target and all obj is - source // if u don't give {} then all object's values goes in obj1
console.log(objreturned2)// op-{ '5': 'a', '6': 'b', '7': 'a', '8': 'b', '9': 'a', '10': 'b' }

// for combine multiple objects we use another method which is spread(...) method
const objspread={...obj4, ...obj5, ...obj6}
console.log(objspread)//op-{ '5': 'a', '6': 'b', '7': 'a', '8': 'b', '9': 'a', '10': 'b' }

// if u have array and in that array multiple objects and u want to loop through or print the value  we will see the example as following
const users=[
    {
        id:1,
        email:"svg@gmail.com"
    },
    {
        id:1,
        email:"svg@gmail.com"
    },
    {
        id:1,
        email:"svg@gmail.com"
    },
]

// how to access the element from above array

users[1].email
console.log(tinderUser)// op-{ id: '123abc', name: 'sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser))// using Object.keys method we can access the all keys of object and convert in array //op-[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))// using Object.values method we can access the values of objects and convert in array // op-[ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser))// using Object.entries method we can access th all key value pair of objects an convert eaach keay value pair in array //op-[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'))// this Objectname.hasOwnProperty checks is given property exist or not// op- true or false

// destructuring of object

const course={
    coursname:"js in hindi",
    price:"999",
    cousrseInstructor:"suraj"
}
// if u don't want to call the object like 'course.courseInstructor' for accessing the object element then u can use following method
const{cousrseInstructor}=course
console.log(cousrseInstructor)//op- suraj
const{cousrseInstructor:instructor}=course// using this method we can de-structure the object
console.log(instructor)//op-suraj