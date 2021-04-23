// JavaScript variables can belong to the local or global scope.

// Global variables can be made local (private) with closures.

function myFunction1(){
    let a = 4; // local variable
    return a*a;
}

console.log(`MyFunction Res = ${myFunction1()}`);

// accessing the funciton declared outside of the function
// When used in browser the Global Varibale belongs to the
// window object 
let b=10; // the global variopable
function myFunction2(){
   
    return b*b;
}

console.log(`MyFunction Res = ${myFunction2()}`);

// using variable without declaration in function can also be used as global variables

function myFuncation3(){
    c = 100; 
    console.log(`c inside the function ${c*c}`);
}
myFuncation3();

function myFuncation4(){
    
    console.log(`c inside the myFunction 4 function ${c*c*10}`);
}
myFuncation4();

// Variable Lifetime
// Global variables live until the page is discarded, like when you navigate to another page or close the window.
// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.
