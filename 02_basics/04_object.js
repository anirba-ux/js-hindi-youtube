// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Anirban"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Anirban",
            lastName: "Chatterjee"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2,obj4)
// console.log(obj3);

// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email:"a@gmail.com"
    },
    {
        id: 2,
        email:"b@gmail.com"
    },{
        id: 3,
        email:"c@gmail.com"
    },
]

const user1 = users[1]
console.log(user1)
// console.log(t);
// console.log(tinderUser)

const tinderUser1 = {}

tinderUser1.id = "123abc"
tinderUser1.name = "Anirban"
tinderUser1.isLoggedIn = false
console.log(tinderUser1);
console.log(Object.keys(tinderUser1))
console.log(Object.values(tinderUser1))
console.log(Object.entries(tinderUser1))

console.log(tinderUser1.hasOwnProperty('isLoggedIn'))











