// Helper to await a delay
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function function2() {
  console.log("function 2 callback message");
}

async function function1() {
  console.log("function 1 first instruction");
  await sleep(10_000); // waits 10 seconds
  await function2();
  console.log("function 1 last instruction");
}

async function executionFlow() {
  console.log("main started");
  await function1(); // waits for function1 to complete before continuing
  console.log("last instruction in main");
}

// Run the flow
executionFlow();
