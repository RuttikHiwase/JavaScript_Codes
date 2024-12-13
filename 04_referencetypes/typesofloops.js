// for-each Loop
let arr=[10,20,40,55,88,567]
arr.forEach((value,index)=>{
    console.log("Number: ",value,"Index: ",index); 
})

for(let value of arr){
    console.log(value);
}

let fullName="ruttik";
for(let val of fullName)
{
    console.log(val);
    
}

//Arrays with Functions
let arr2=[10,20,30,40,50,60]
function getsum(arr2) {
    let len=arr2.length;
    let sum=0;
    for(let index=0;index<len;index++){
        sum=sum + arr[index];
    }
    return sum;
}
let totalsum=getsum(arr2);
console.log(totalsum);



let arrnew=[10,30,44,60,70,55];
let getSumNew=(arrnew)=>{
    let sum=0;
    arrnew.forEach((value)=>{
        sum=sum + value ;
    })
    return sum;
}
let totalsum2=getSumNew(arrnew)
console.log(totalsum2);


