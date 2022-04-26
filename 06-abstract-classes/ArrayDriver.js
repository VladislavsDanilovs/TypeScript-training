"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 20);
console.log(myCircle.calculateArea());
console.log;
let myRectangle = new Rectangle_1.Rectangle(20, 30, 40, 40);
console.log(myRectangle.calculateArea());
let shapeArray = [];
shapeArray.push(myCircle);
shapeArray.push(myRectangle);
// for(let i=0; i<shapeArray.length; i++){
//     console.log(shapeArray[i]);
// }
for (let tempArray of shapeArray) {
    console.log(tempArray.getInfo());
}
