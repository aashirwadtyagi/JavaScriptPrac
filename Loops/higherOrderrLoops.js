// for of loop
//in array
const Array = [1,2,3,4,5]
for (const num of Array) {
    console.log(num);
}
//In strings
const greeting = "Hello World"
for (const greet of greeting) {
    console.log(greet);
}
// maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}