//const tinderUser=new Object() ----singleton obj
const tinderUser={}//----non-singleton Obj

 tinderUser.id="123abc"
 tinderUser.name="sam"
 tinderUser.isloggedIn=false

//console.log(tinderUser);


const regularUser={
    email:"ruttik@gmail.com",
    fullname:{
        userfullname:{
              firstname:"ruttik",
              lastname:"hiwase"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);



const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}//gives prblm
const obj3=Object.assign(obj1,obj2)
//const obj3=Object.assign({},obj1,obj2)----{} is good to use
console.log(obj3);

const obj4={...obj1,...obj2}
console.log(obj4);






