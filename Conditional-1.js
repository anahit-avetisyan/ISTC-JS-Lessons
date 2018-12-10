 //task 1: the variable does not satisfy both conditions,so answer is undifined 
 var x = 13;
 var answer; 
 if(x == 10){
  answer = "yes"   
 }
 else if(x > 14){
answer = "no"
 }
 console.log(answer);
 //task 2 the second  condition is satisfied, so the answer is "no"
 
 var x = 15;
var answer; 
if(x == 10){
answer = "yes"   
}
else if(x > 14){
answer = "no"
} 
else {
 answer = "right";
}
console.log(answer);
/* task 3,4 I try to show the difference between && and || for same variables:For task 3 answer false
for task 4 answer is true*/
var x = "home";
var y = "dog";
var c = 55;
var z = 12;

console.log(x == "cat" && z == "12");

console.log(x < 10||y == 12||z == "12" );
//task5 for 1+100*5 answer is 501, for (1+100)*5) answer is 505
var x = 1;
var y = 100;
var z = 5;
var n = x + y * z;
var m = (x + y) * z;
console.log(n);
console.log(m);
//task 6 i try to understand is this boy "adult" or no
var boy = {age:19, name:"Hayk"};

if(boy.age >= 18){
  
alert("adult")};
