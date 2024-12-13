//Arrow Functions
//Introduce in ES6,arrow function provide a concise syntax for wrting function,especially for short,
//anonymous functions.
//map -> picks every element from arr ,performs operation on it.

//Map
let arr=[10,30,50]
let newarr=arr.map((number)=>{
    return number * number;
})
console.log(newarr);


//Fliter
let arr3=[50,11,13,67,60,70,80]
let arr4=arr3.filter((number)=>{
    if(number % 2=== 0){
        return true;
    }else{
        return false;
    }
})
console.log(arr4);




let arr5=[1,2,'love','kunal',null];
let ans2=arr5.filter((value)=>{
    if(typeof(value)=== 'string'){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans2);



//Reduce Method
let arr6=[10,20,30,40,50]
let arr7=arr6.reduce((arr,current)=>{
      return arr + current;
},0)
console.log(arr7);
