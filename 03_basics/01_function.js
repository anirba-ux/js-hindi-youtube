

function sayMyName () {
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(num1,num2) {
//    console.log(num1 + num2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // console.log("Anirban");
    
    // return result
    return number1 + number2
}

// addTwoNumbers(4, 3)
const result = addTwoNumbers(3, 5)
// console.log("Result: ",result)


function loginUserMessage (username = "sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
     return `${username} just logged in`
}

// console.log(loginUserMessage("Anirban"))

// console.log(loginUserMessage());
// console.log(loginUserMessage("Sangita"));






function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "anirban",
    pricex: 199
}

function handleObject (anyObject) {
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const NewArray = [200, 500, 300, 100]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(NewArray));
console.log(returnSecondValue([200, 500, 300, 100]));


