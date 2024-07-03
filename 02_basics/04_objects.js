// const tinderUser = {}

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "vishal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "vish@gmail.com",
    fullname : {
        userfullname : {
            firstname: "vishal",
            lastname: "chandera"
        }
    }


}

// console.log(regularUser.email);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}




// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3 ={...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: "123abc",
        email: "v@gmail.com"
    },
    {
        id: "123abc",
        email: "v@gmail.com"
    },
    {
        id: "123abc",
        email: "v@gmail.com"
    },
    {
        id: "123abc",
        email: "v@gmail.com"
    },
    {
        id: "123abc",
        email: "v@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));









