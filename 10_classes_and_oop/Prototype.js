// let myName = "anirban     "
// let myChannel = "chai     "

// console.log(myName.truelength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
       console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}

// heroPower.hitesh()
myHeroes.hitesh()

Array.prototype.heyAnirban = function(){
    console.log(`Hitesh says hello`);
}

myHeroes.heyAnirban()
// heroPower.heyHitesh()

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
    
}

anotherUsername.trueLength()
"Anirban".trueLength()
"iceTea".trueLength()