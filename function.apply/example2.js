// Method Reuse
// With the apply() method, you can write a method that can be used on different objects.

// The JavaScript apply() Method
// The apply() method is similar to the call() method 

// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

let employee  ={
    getFullName:function(addr,city){
        
        return `${this.firstName} ${this.middleName} ${this.lastName} ${addr} ${city}`;
    }
};

let e1 = {
    firstName: 'Mahesh',
    middleName: 'Ramesh',
    lastName: 'Sabnis'
};

let e2 = {
    firstName: 'Tejas',
    middleName: 'Mahesh',
    lastName: 'Sabnis'
};

console.log(`The E1 call ${employee.getFullName.apply(e1)}`);
console.log(`The E2 call ${employee.getFullName.apply(e2)}`);

// using arguments


console.log(`The E1 call ${employee.getFullName.apply(e1, ["Bavdhan", "Pune"])}`);
console.log(`The E2 call ${employee.getFullName.apply(e2,  ["Bavdhan", "Pune"])}`);