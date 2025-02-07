const userEmail = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

//falsy value

//false, 0, -0, BigInt 0n, "", null, undefined, Nan

//truthy value

//"0",'false'," ",[], {}, function(){}

const userEmail1 = []

if(userEmail1.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}