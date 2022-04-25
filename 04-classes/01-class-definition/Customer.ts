class Customer {
    
    firstName: string;
    lastName: string;

    constructor(theFirst:string, theLast:string){
        this.firstName = theFirst;
        this.lastName = theLast;
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
