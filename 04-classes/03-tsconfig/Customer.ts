class Customer {
    
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst:string, theLast:string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName():string {
        return this._firstName;
    }

    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }
    
    public set lastName(value: string) {
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
