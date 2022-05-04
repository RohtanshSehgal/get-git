const axios = require("axios");

// callbacks
const arr = [1, 2, 3, 4, 56, 77, 88];
console.log(
  arr.map((value) => {
    return value * value;
  })
);

// promises
let num = 11;
let num2 = 12;
const promises = new Promise((res, rej) => {
  if (num > num2) {
    res("num is greater");
  } else {
    rej("num2 is greater");
  }
});
promises
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("this is after promise is fired");
// api calling
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then(({ data }) => console.log(data));
