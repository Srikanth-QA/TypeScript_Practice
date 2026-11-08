/*Program 5: Check block scope using let 
Write a program: 
Declare let a = 10 outside an if block. 
Declare let a = 20 inside an if block. 
Print both values. 
Expected output: 
Inside block: 20 
Outside block: 10 */

let a=10;
if(true){
    let a=20;
    console.log("Inside the block:"+ a);
}
console.log("Outside the block: " + a);