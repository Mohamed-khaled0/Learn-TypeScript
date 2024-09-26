// Create Enums + Function Here

enum Game {
    Easy = 100,
    Medium = Game.Easy-20,
    Hard = Game.Medium-(Game.Easy/2)
}



function getInsane(num: number): number {
    return Game.Hard - num;
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(getInsane(0)); // 20