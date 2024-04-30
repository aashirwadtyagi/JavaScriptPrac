const course = {
    name : "JScourse",
    price : 100,
    CourseInstructor : "Aashirwad"
}

//console.log(course.CourseInstructor);

const {CourseInstructor : Instructor} = course
console.log(Instructor);