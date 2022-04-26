"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(7, 9);
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(20, 30, 40, 40);
let shapeArray = [];
shapeArray.push(myShape);
shapeArray.push(myCircle);
shapeArray.push(myRectangle);
// for(let i=0; i<shapeArray.length; i++){
//     console.log(shapeArray[i]);
// }
for (let tempArray of shapeArray) {
    console.log(tempArray.getInfo());
}
