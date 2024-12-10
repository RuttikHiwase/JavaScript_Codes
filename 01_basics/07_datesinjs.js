//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let mycreateDate = new Date(2023,1,24)
console.log(mycreateDate.toDateString());


let myCreateNewDate = new Date("01-14-2023")
console.log(myCreateNewDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());









