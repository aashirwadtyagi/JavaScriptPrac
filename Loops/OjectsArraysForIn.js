const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}
for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`);
}
//for arrays

const pp = ["js", "rb", "py"]

for (const key in pp) {
    console.log(pp[key]);
}

//forIn on maps
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
//cant iterate over maps

