
/*
use local variable as much as 
possible
if need to declare variable as global
declare the variable in the class level
avoid using var keyboard
for variable declaration
*/
const age=20;
function init() {
    email="aafalu@yahoo.com" //this is considered as global variable better to declare outside the method
    console.log(email);
    console.log(age);
    printVariableDetails();

}

function printVariableDetails() {
    let name = "aafalu";
    console.log(name);
    console.log(email);
    console.log(age);
}