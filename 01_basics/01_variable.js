const accountId = 144553

let accountEmail = "anirban@gmail.com"

var accountPassword = "12345"

accountCity = "Bansberia"

//accountId = 2 //not allowed
accountEmail = "hc@ab.com"
accountPassword = "212121"
accountCity = "Chinsura"
let accountState;

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
