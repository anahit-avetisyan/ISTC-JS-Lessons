//Task 1: Tried to show if object has this parameter or no
var market = {
    meat: "partA",
    fruit: "partB",
    sweety: "partC",
    grocery: "partD",
    clothesForKids: "partE",
    clothesForMen: "partF",
    clothesForWomen: "partG",
 }
  function shop(param) {
 console.log(market.hasOwnProperty(param))
  }
shop("meat");
//Task 2 I deleted 3rd parameter from object
var market = {
    "1": "meat",
    "2": "fruit",
    "3":  "sweety",
    "4":  "grocery",
    "5": "clothesForKids",
 }
 var x = Object.keys(market)
 for (var key in market){
 if(key === x["2"] ){
 delete market[key];
 }

// else{
//     return "object has not 3rd parametr";
// }
 }
console.log(market);

//task 3 
var obj = {
    meat: "partA",
    fruit: "partB",
    sweety: "partC",
    grocery: "partD",
    clothesForKids: "partE",
    clothesForMen: "partF",
    clothesForWomen: "partG",
 }

    console.log(Object.keys(market).length);

  
 
//         task 4 Added new property
     var obj = {
         a: 12,
         b: 3,
         c:5,
         d: 4,
         e:  function() {
             return this.a * this.c;
         }
     }
 obj.f = function(){
     return this.e / this.d + this.b;
 };
console.log(obj.f());
console.log(obj);