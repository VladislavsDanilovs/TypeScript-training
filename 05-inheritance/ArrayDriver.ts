import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(7, 9);

let myCircle = new Circle(5, 10, 20);

let myRectangle = new Rectangle(20, 30, 40, 40);


let shapeArray: Shape[] = [];
shapeArray.push(myShape);
shapeArray.push(myCircle);
shapeArray.push(myRectangle);

// for(let i=0; i<shapeArray.length; i++){
//     console.log(shapeArray[i]);
// }

for(let tempArray of shapeArray){
    console.log(tempArray.getInfo());
}





