function sayMyName () {
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");

}




// sayMyName()


// function addTwoNumber(number1, number2) {
// console.log(number1 + number2);
// }


function addTwoNumber(number1, number2) {
//    let result = number1 + number2
// console.log("Vishal");
// return result
return number1 + number2
}
    



const result = addTwoNumber(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username) {
    if (username === undefined){
        console.log("plese enter a username");
    }

    function calculatecartprice( val1, val2, ... num1){
        return num1
    }

    console.log(calculatecartprice(200, 400, 500, 2000));



    return `${username} just logged in`
}
console.log(loginUserMessage());

// console.log(loginUserMessage("vishal"));




const user = {
    username: "vishal",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)
handleobject({
    username: "pareshbhai",
    price: 399
})

const myNewArray = [200, 400, 500, 900]

function returnSecondValue(getArray){
    return getArray[0]

} 
console.log(returnSecondValue(myNewArray));
  


