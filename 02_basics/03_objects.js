// singaleton

//objectliteral

const mySym = Symbol("key1");

const JsUser = {
    name: "vishal",
    "full name" : "vishalChandera",
    [mySym]: "key1",
    age: 22,
    location: "ahmedabad",
    email: "vishal@google.com",
    isLoggedIn: false,
    lastLoggInDays: ["monday","saturday"]
    
};

console.log( JsUser.email);
console.log( JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "vishalll@google.com"
Object.freeze(JsUser)
