// Functions

//Function Without Parameter
function myName(){
    console.log("My Name is jayesh"); 
}
myName();


//Function With Parameter
function myFullName(fname,lname){
    let x=fname + " "+ lname;
    return x;
}
let fullName=myFullName("kunal","sharma");
console.log(fullName);


//Function without Name.(Another way to implement Function)
let getMultify=function(a,b){
  return a*b;
}
let ans=getMultify(5,8);
console.log(ans);








