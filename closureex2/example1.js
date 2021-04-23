// Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.

function OuterFunction() {
 
    var outerVariable = 400;

    function InnerFunction() {
       // console.log(outerVariable);
        outerVariable = outerVariable + 300; // modifying the variable in inner function
        console.log(outerVariable);
    }
    outerVariable = outerVariable + 100; // modifying the variable in parent scope
    return InnerFunction; 
}
var innerFunc = OuterFunction();

innerFunc();  

// In the above example, return InnerFunction; returns InnerFunction from OuterFunction when you call OuterFunction(). A variable innerFunc reference the InnerFunction() only, not the OuterFunction(). So now, when you call innerFunc(), it can still access outerVariable which is declared in OuterFunction(). This is called Closure.

// One important characteristic of closure is that outer variables can keep their states between multiple calls. Remember, inner function does not keep the separate copy of outer variables but it reference outer variables, that means value of the outer variables will be changed if you change it using inner function.

// When to use Closure?
// Closure is useful in hiding implementation detail in JavaScript. In other words, it can be useful to create private variables or functions.

// As per the closure definition, if inner function access the variables of outer function then only it is called closure.

// The following is not a closure.

// var Counter = (function () {
//         var i = 0;
//         return { counter : i += 1 };
// })();


// Practical uses of closure
// JavaScript closures can be used to implement throttle and debounce functionality in your application.

// Throttling
// Throttling puts a limit on as a maximum number of times a function can be called over time. As in "execute this function at most once every 100 milliseconds."


// example of throltteling
const throttle = (func, limit) => {
    let isThrottling;
    return function() {
      const args = arguments;
      const context = this;
      if (!isThrottling) {
        func.apply(context, args);
        isThrottling = true;
        setInterval(() => isThrottling = false, limit);
      }
    };
  };
 
 function display(){
     alert('I am called');
 } 

 throttle(display(),1000);
 console.log('Calling Throttle');
