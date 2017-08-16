//create the student file to use fat arrow function with 2 parameter
var student = function (name, rollno) {
    console.log("The Student Name=" + name);
    console.log("The Student RollNo=" + rollno);
};
// to pass the values to the student file with help of printvalue function
function printvalue() {
    student('Abirami', 1234);
}
