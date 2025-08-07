const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
};

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com";

JsUser.greeting = function(){
    console.log("Hello Js User");  
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();
