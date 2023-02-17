function function2(){
    console.log('function 2');
}
function function1(){
    console.log('function 1 first instruction');
    var date1 = new Date();
    while ((new Date()) - date1 <=10000){
        /* do nothing for 10 seconds*/};
    function2();
    console.log('function 1 last instruction');
}
function executionFlow(){
    console.log('main started');
    function1();
    console.log('last instruction in main');
}

executionFlow();