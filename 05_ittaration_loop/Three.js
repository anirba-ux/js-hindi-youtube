// for of loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello world"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map ()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FRA', "France")
map.set('IN', "India")
console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'WWE',
    'game3' : 'English Premiure League'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


