
const mySym=Symbol("key1")
const JsUser={
    name:"basak",
    age:20,
    location:"bhubanswer",
    email:"basak@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["mondays","surdays"],
    // mySym:"mykey1"  string

    // for symbol type we have to use [] eg:- 
    [mySym]:"mykey1"
}
JsUser.email="pramanik@2023";

// console.log(JsUser["name"]);
// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);

// console.log(JsUser["email"]);
// Object.freeze(JsUser);
// console.log(JsUser);


JsUser.greeting=function(){
    console.log("hello js boys..")
}

console.log(JsUser.greeting())

JsUser.greetingTwo=function(){
    console.log(`hello js boys.. ${this.isLoggedIn}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())