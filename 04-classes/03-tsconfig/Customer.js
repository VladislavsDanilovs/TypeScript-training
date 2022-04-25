"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// creating instance
let myCustomer = new Customer("Maxim", "Bread");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.firstName = "Marven";
myCustomer.lastName = "Jonson";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
