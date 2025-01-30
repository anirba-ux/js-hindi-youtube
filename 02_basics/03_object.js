// singleton(made by constructor)
//Object.create

// object literals

const mySym = Symbol("mykey1")

const JsUser = {
   name: "anirban",
   "full name": "Anirban Chatterjee",
   [mySym]: "mykey1",
   age: 18,
   location: "Bansberia",
   email: "anirban@google.com",
   isLoggedIn: false,
   lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)
// console.log( typeof JsUser[mySym])

JsUser.email = "anirban@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "anirban@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
   console.log("Hello Js user");
}

console.log(JsUser.greeting())

JsUser.greetinTwo = function(){
   console.log(`Hello Js user, ${this.name}`)
}
console.log(JsUser.greetinTwo())
console.log(JsUser)
