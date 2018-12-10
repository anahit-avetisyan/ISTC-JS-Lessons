 //Task 1: this function has 2 parameters, 1st show number, the second decimal
 function number(param1,param2) {
    if((typeof param1!=="number")||(typeof param2!=="number")){
        return "please fill in number"
    }
  else{return param1.toFixed(param2)
} 
}
console.log(number(3.523,"S"))

 //task 2 Tried to show number was natural or no
function number(param) {
       if( param > 0 &&  Number.isInteger(param) === true){
           console.log("natural number");
       }
      else{
          console.log("not natural number");
      }
   }
   number(123.2);