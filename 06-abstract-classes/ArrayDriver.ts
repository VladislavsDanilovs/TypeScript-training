import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 10, 20);

console.log(myCircle.calculateArea());
console.log;

let myRectangle = new Rectangle(20, 30, 40, 40);

console.log(myRectangle.calculateArea());


let shapeArray: Shape[] = [];
shapeArray.push(myCircle);
shapeArray.push(myRectangle);

// for(let i=0; i<shapeArray.length; i++){
//     console.log(shapeArray[i]);
// }

for(let tempArray of shapeArray){
    console.log(tempArray.getInfo());
}





