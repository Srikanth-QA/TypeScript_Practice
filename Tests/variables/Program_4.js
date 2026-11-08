"use strict";
/*Program 4: Check block scope using var
Write a program:
Declare var a = 10 outside an if block.
Declare var a = 20 inside an if block.
Print the value of a inside and outside the block.
Expected output:
Inside block: 20
Outside block: 20 */
var a = 10;
if (true) {
    var a = 20;
    console.log("Inside the block:" + a);
}
console.log("Outside the block: " + a);
