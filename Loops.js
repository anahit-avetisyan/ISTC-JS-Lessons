 //1. task: Tried to show even numbers during 0-100 range
        //1 st 	variant
        for( var x = 0; x <= 100; x++)
        {
            if(x % 2 == 0){
                console.log(x);
        }
        }
        // 2nd variant, is it true Tatev jan?
        for(var x = 0; x <= 100; x = x + 2 ){
            console.log(x);
        }
//2.task: Used &&(and) logical operators for solving my task
for(var i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 4 == 0){
        console.log(i);
    }
}
//task 4: I calculated the sum of even numbers during 0-100 range
var sum = 0;
for( var x = 0; x <= 100; x++)
        {
            if(x % 2 == 0){
                sum = sum + x;
                       
}
}
console.log("Sum ="+ sum);
//Task 3  Tried to show the answer  using <<for>>
 
var sum = 0;
 
 for(var x = 0; x <= 10; x++){
     if(x%x==0){
    for(var y= 0; y<=10;y++){
if(x%y == 0){
    sum = sum + x;
    
}
}
}
}
console.log("SUM =" + sum);

// Tried to show answer using <<for>> and <<while>>
var sum = 0;
 for(var x = 0; x <= 10; x++){
     if(x%x==0){
         var y=0;
    while(y<=10){
        y++;
if(x%y == 0){
    
    sum = sum + x;
}
}
}
}
console.log("SUM =" + sum);