// Create Enums + Function Here

enum Game1 {
    Easy = 100,
    Medium = Game1.Easy-20,
    Hard = Game1.Medium-(Game1.Easy/2)
}



function getInsane(num: number): number {
    return Game1.Hard - num;
}

// Output
console.log(Game1.Easy); // 100
console.log(Game1.Medium); // 80
console.log(Game1.Hard); // 30
console.log(getInsane(0)); // 20