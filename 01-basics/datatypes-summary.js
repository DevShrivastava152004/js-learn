//primitive

//7 types: string, Number, Boolearn, null , undefined, Symbol ,BigInt

// Reference (Non primitive)

//Array, Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 34567473737483n
// const heros ["shaktiman", "naagraj", "doga" ]
// let myObj={
//     name: "hitesh",
//     age: 22,
// }
// const myFunction = function(){
//     console.log("hello world");
// }
console.log(typeof bigNumber);


// +++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), heap(non-primitive)

let myYoutubename = "hiteshchoudhry"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi :"user@ybl"
}
