import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";


let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let arrayWithCoaches: Coach[] = [];
arrayWithCoaches.push(myCricketCoach, myGolfCoach);

for(let tempArray of arrayWithCoaches){
    console.log(tempArray.getDailyWorkout());
}
