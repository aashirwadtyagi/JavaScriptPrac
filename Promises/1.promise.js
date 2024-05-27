// const promisee = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('Hello from the callback!');
//     }, 2000)
// })

// promisee.then(function(){
//     console.log("I'm a then()");
// })

// const secondpromise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({ name: "John", email: "aashirwad@chaicom" })
//     }, 1000);
// })

// secondpromise.then(function(user){
//     console.log(user);
// })

// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username: "aashirwad", password: "123"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promise4.then((user)=>{
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise is either resolved or rejected");
// })

// const promise5 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username: "aashirwad", password: "123"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// async function five(){
//     const res = await promise5
//     console.log(res);
// }
// five()

// const promise5 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username: "aashirwad", password: "123"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// async function five(){
//     try {
//         const res =  await promise5
//         console.log(res);
//     } catch (error) {
//         console.log("Error thrown");
//     }
// }

// async function getallusers(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = res.json()
//         console.log(data);
//     } catch (error) {
//         console.log("error");
//     }
// }

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch()















