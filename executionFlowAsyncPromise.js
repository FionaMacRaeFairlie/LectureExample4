let function2 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Promised message from function 2");
    },
        3000);
});

function function1() {
    console.log('function 1 first instruction');
    function2.then(function (value) { console.log(value) });
    console.log('function 1 last instruction');
}

function executionFlow() {
    console.log('main started');
    function1();
    console.log('last instruction in main');
}

executionFlow();