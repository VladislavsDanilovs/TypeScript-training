let sportsOne: string[] = ["Golf", "Tennis", "Cricket", "Swimming"];

for(let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i]);
}

//Simplified for loop

for (let tempSport of sportsOne){

    if(tempSport == "Cricket") {
        console.log(tempSport + "is My favorite!");
    } else{
        console.log(tempSport);

    }

}