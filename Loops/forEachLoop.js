const pp = ["js", "rb", "py"]

pp.forEach( function (val) {
    console.log(val);
} )
//using arrow function
pp.forEach( (value) => {
    console.log(value);
})


function printMe(item){
    console.log(item);
}
pp.forEach(printMe)

//loops on arays with objects
const array = [
    {
        language : "javascript",
        fileName : "js"
    },
    {
        language : "Ruby",
        fileName : "rb"
    },
    {
        language : "C++",
        fileName : "cpp"
    }
]

array.forEach( (item) => {
    console.log(item.fileName);
} )