let score="33abc"
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof score)
console.log(valueInNumber)

let someNumber=33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ******************************Operations************************************

let value = 3
let negValue= -value
console.log(negValue)

let str1="ruttik"
let str2="Hi"
console.log(str1+str2)


console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//112
console.log(1 + 2 + "2");//32



console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

/*
The reason is that an equality check == and comparisions ><>=<= work differently.
Comparisons convert null to a number,treating it as 0.
Thats why (3) null >=0 is true and (1) null > 0 is false.
*/


console.log("2" === 2);//Strict Check




