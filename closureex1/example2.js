// defining a global variable that can be accessed by multile functions

let counter= 0;

function MyCounter(){
    counter++;
}

MyCounter();
console.log(`First Invoke of the Counter ${counter}`); // 1
MyCounter();
console.log(`Second Invoke of the Counter ${counter}`); // 2
MyCounter();
console.log(`Third Invoke of the Counter ${counter}`); // 3


// defining the local counter

function Counter(){
    let counter=0; // the local variable
    counter++;
    console.log(`Counter = ${counter}`); 
}

Counter(); // 1
 
Counter(); // 1
 
Counter(); // 1
 

