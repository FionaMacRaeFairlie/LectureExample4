function function2(){
    console.log('function 2');
}
function function1(callback){
    console.log('function 1 first instruction');
    setTimeout(callback,10000)
    console.log('function 1 last instruction');
}
function executionFlow(){
    console.log('main started');
    function1(function2);
    console.log('last instruction in main');
}

executionFlow();