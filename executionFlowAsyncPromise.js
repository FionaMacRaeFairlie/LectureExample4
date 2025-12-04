// let function2 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve("Promised message from function 2");
//   }, 3000);
// });

// function function1() {
//   console.log("function 1 first instruction");
//   function2.then(function (value) {
//     console.log(value);
//   });
//   console.log("function 1 last instruction");
// }

// function executionFlow() {
//   console.log("main started");
//   function1();
//   console.log("last instruction in main");
// }

// executionFlow();

// Helper: returns a Promise that resolves after ms
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function function2() {
  console.log("function 2 callback message");
  // If needed, return a Promise to chain further
  return Promise.resolve();
}

function function1() {
  console.log("function 1 first instruction");
  // Return the Promise chain so callers can wait for it
  return sleep(10_000)
    .then(() => function2())
    .then(() => {
      console.log("function 1 last instruction");
    });
}

function executionFlow() {
  console.log("main started");
  // Wait for function1 via chaining
  return function1().then(() => {
    console.log("last instruction in main");
  });
}

// Start execution (and optionally attach final handlers)
executionFlow();
