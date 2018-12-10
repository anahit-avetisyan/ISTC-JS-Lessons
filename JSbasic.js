 //Task 1  created function which  concatenated our parameter n times
 function name(param,n=1){
    if (typeof param == "string" && typeof n == "number" &&  n > 0 ){
        return param.repeat(n)
    }
    
    else if(typeof param != "string" || typeof n !== "number"|| n < 1) {
      return  "please input the necessary parameters"}
         }

    console.log(name("hhh",5))
     //task 2 created an array with arrays from first array
    var arr = [2,4,["string", 6,8], "hello",7,[4, 9, "name"], -2,14,-6]
    var arr1=[]
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])==true){
           arr1.push(arr[i])
        }
    }
    console.log(arr1)
    //task 3 Checked if this word Palindrom or not
    function palindromeWords(param){
    if(typeof param == "string"){
        var y = param.split("")
        for(var i=0,j=y.length-1;i<y.length,j>0;i++,j--){
     if(y[i]===y[j]){
         return "palidrom word"  
    }
    else{
        return "please input  Palindrome words"
    }
}
}
    else { return "please input string"
}
}
    console.log(palindromeWords("gaahaag"))