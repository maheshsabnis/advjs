// There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.

let sum = new Function('a','b', 'return a +b;');

console.log(`sum = ${sum(100,200)}`);

// using in closures , the the outer variable is not acessibile

function OuterFunction() {
 
    let outerVariable = 40;

   let InnerFunction = new Function('a', 'return Math.pow(a,a)');

   console.log(`${InnerFunction(outerVariable)}`);

    outerVariable = outerVariable + 100; // modifying the variable in parent scope
    return InnerFunction; 
}
var innerFunc = OuterFunction();

innerFunc();  