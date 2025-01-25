// Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 34565478245852215n





//Non Primitive (call by reference)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]

let myObj = {

    name:"anirban",
    age: 28,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof heros );

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Foatball Pagol"

let anothername = myYoutubename
anothername = "anirban6string"
// console.log(myYoutubename);

// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anirban@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

