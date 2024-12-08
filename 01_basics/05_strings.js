const name="Ruttik"
const repoCount= 10
console.log( name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc')
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


//substring
const newString=gameName.substring(0,4)
console.log(newString);

//slice
const anotherString=gameName.slice(-8,4)
console.log(anotherString);

//Trim Method
const newStringOne="   Rutik  "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace
const url="https://ruttiik.com/rutt%20choudary"
console.log(url.replace('%20','-'));

//includes
console.log(url.includes('sunny'));














