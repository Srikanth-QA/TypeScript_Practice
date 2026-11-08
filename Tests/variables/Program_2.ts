/*Program 2: Reassign variable values 
Declare a variable using var with value 10. 
Declare a variable using let with value 20. 
Reassign both variables with new values. 
Print the updated values. 
Expected output: 
var value: 100 
let value: 200 */

var varValue: number = 10;
let letValue: number = 20;
console.log("Initial var value: " + varValue);
console.log("Initial let value: " + letValue);
var varValue: number = 100; // Reassigning var variable
letValue = 200; // Reassigning let variable
console.log("Updated var value: " + varValue);
console.log("Updated let value: " + letValue);