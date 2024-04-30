// function myName() {
//     console.log("Hello, Aashirwad");
// }
// //myName();

// function add(num1, num2){
//     return num1  + num2;
// }

// const result = add(10, 20);
// // console.log("Result: ", result)

//give user just loged in message
function loginUserMessage(username){
    //check if username is valid or not
    if(username == undefined){
        console.log("Please enter a username");
        return
    }
    return `Hello ${username}, Welcome to the world of Aashirwad!`;
}
console.log(loginUserMessage());