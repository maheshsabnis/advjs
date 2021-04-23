// All functions have access to the global scope.  

// In fact, in JavaScript, all functions have access to the scope "above" them.

// JavaScript supports nested functions. Nested functions have access to the scope "above" them.

// In this example, the inner function plus() has access to the counter variable in the parent function:

function add(){
    let counter = 0;
    function increament(){counter++;}
    increament();
    return counter;
}


console.log(`First Function Invoker ${add()}`); // 1
console.log(`Second Function Invoker ${add()}`); // 1
console.log(`Third Function Invoker ${add()}`); // 1
 