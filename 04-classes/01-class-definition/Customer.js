var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// creating instance
var myCustomer = new Customer("Maxim", "Bread");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.firstName = "Marven";
myCustomer.lastName = "Jonson";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
