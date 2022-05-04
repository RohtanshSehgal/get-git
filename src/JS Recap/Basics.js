//hello world
console.log("Hello world");
//variable declare
// var , const ,let

// loops

for (let index = 0; index < 100; index++) {
  console.log(index);
}

//conditions
let num = 100;
let num2 = 1008;
if (num > num2) {
  console.log("num is greater");
} else {
  console.log("num2 is greater");
}
//ternary operator
num * 1000 > num2
  ? console.log("num is greater")
  : console.log("num2 is greater");

//functions
function demo(params) {
  console.log("Passed Function");
}
function greet(passedFunction) {
  console.log("Hello World");
  passedFunction();
}
greet(demo);

// returning array , obj and function
function a() {
  console.log("a");
  return function b(params) {
    console.log("b");
  };
}
let c = a();
c();
// ----------------------------------------------------arrow functions---------------------------------------------
// using ()=>() will implicitly return
// using ()=>{} will have to write return
const getPerson = () => ({ name: "Nick", age: 24 });
console.log(getPerson());
