/*Program 6: Find the difference between var and let in a for loop 
Write two separate loops: 
First loop: Use var i = 0. 
Second loop: Use let i = 0. 
Print values from 0 to 4. 
Try accessing the loop variable outside each loop. 
Expected output: 
var loop: 0 1 2 3 4 
let loop: 0 1 2 3 4 
Think: What happens when you access i outside each loop? */

var i: number = 0;
if(i>=4){
    console.log("var loop: " + i);
    i++;
}
let j:number = 0;
if(j>=4){
    console.log("let loop: " + j);
    j++;
}