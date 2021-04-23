// A closure is a function having access to the parent scope, even after the parent function has closed.


// The variable add is assigned to the return value of a self-invoking function.

// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

let counter = (function(){
    let ctr = 0;
    // alert(`Returned...`); // called only once
    return function(){ctr+=1; return ctr;};
   
})();   

console.log(`First Invoke of the Counter ${counter()}`);
console.log(`Second Invoke of the Counter ${counter()}`);
console.log(`Third Invoke of the Counter ${counter()}`);
console.log(`Fourth Invoke of the Counter ${counter()}`);