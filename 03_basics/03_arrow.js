const user ={
    username: "vishal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = "sneh"
// user.welcomeMessage()

// console.log(this);

// function chai() {
    //  username = "vishal"

//     console.log(this);

// }

// chai()



// const chai = function () {

//     username = "vishal"
//      console.log(this.username);

// }

// chai()


// const chai = () => {

//     username = "vishal"
//      console.log(this.username);

// }

// chai()

const chai = () => {

    username = "vishal"
     console.log(this);

}

// chai()


// const addTwo = (num1, num2) => {
// return num1 + num2

// }
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ({username: "vishal"})
    
    
    


console.log(addTwo(3, 4));