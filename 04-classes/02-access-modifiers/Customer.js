var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
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
