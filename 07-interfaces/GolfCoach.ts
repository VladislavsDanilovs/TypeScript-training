import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    
    getDailyWorkout(): string {
        return "Try better! Improve your skill by practice!";
    }

}