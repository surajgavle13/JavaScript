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

