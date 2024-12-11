//array 
//Arrays in JS are resizeble
//Array in Js are hetrogenous
//Zero based operation
//Uses the shallow copy 
//Note - shallow copy means uses same ref for operations i.e we changes the value in memory using ref
//Note - Deep copy is vice versa of shalllow copy


const myArr=[11,2,3,5,3,6,7,9,true,"ruttik"]
console.log(myArr[0]);

const myHeros=["spiderman","superman"]

const myArr2=new Array(1,2,3,4)
console.log(myArr2[2]);

//Methods

myArr.push(90);
myArr.push(99);
myArr.pop();
myArr.shift()
console.log(myArr);


console.log(myArr.includes(55));//false
console.log(myArr.includes(90));//gives the index


const newArr=myArr.join()//chages the type of array to string
console.log(myArr);
console.log(typeof newArr);

//Slice and Splice - imp interview que

//Slice
console.log( "A  ",myArr);
const myn1=myArr.slice(1,3)// gives the section of array . return from 1 index to 2,i.e ele before 3 index.
console.log(myn1);

//Splice
console.log("B ",myArr);
const myn2=myArr.splice(1,3) //gives the section of array. return 1 idx to 3idx . including 3rd idx 
// and splice remove the section from original array and give remaining ele in original array
console.log(myn2);
console.log(myArr);


///
















