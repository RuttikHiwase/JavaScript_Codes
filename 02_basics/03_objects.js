
//Note : uses Keys and Pairs to store data




//singleton

//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Hitesh",
    age :18,
    location:"jaipur",
    email:"ruttik@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    "full Name":"Ruttik Hiwase",
    [mySym]:"mykey1"

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);//We can use dot(.) to represent fullName here.
console.log(JsUser[mySym]);

JsUser.email="hitesh@chat.com"
//Object.freeze(JsUser)//By using this we can not changes property in JsUser


//Functions in JS
JsUser.greeting=function(){
    console.log("Hello JS User");
    
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());




JsUser.greetingTwo=function(){
    console.log("Hello JS User");
}
console.log(JsUser.greetingTwo());








