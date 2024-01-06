const accountId = 1234
accountName = " deepanshu"
var accountPassword = " 09876 "
let accountEmail = " deep99@gmail.com"
accountCity = "Noida"
/*
prefer not to use var 
Because it create problem in the block scope and functional scope
*/
let accountState;
// accountId = 2 // Not allowed in this.
accountEmail = " Deep888@gmail.com"
accountPassword = " 020202"
console.log("accountId");
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
