// With the call() method, you can write a method that can be used on different objects.
// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With call(), an object can use a method belonging to another object.

let employee  ={
    getFullName:function(addr,city){
        return `${this.firstName} ${this.middleName} ${this.lastName} ${addr} ${city}`;
    }
};

// This example calls the fullName method of employee, using it on person1:

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

console.log(`The E1 call ${employee.getFullName.call(e1)}`);
console.log(`The E2 call ${employee.getFullName.call(e2)}`);

// using arguments


console.log(`The E1 call ${employee.getFullName.call(e1, "Bavdhan", "Pune")}`);
console.log(`The E2 call ${employee.getFullName.call(e2,  "Bavdhan", "Pune")}`);

// Note: While the syntax of this function is almost identical to that of apply(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.