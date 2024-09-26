"use strict";
class Player {
    constructor(username, typename, level, isOnline) {
        this.username = username;
        this.typename = typename;
        this.level = level;
        this.isOnline = isOnline;
    }
    details() {
        return `Hello ${this.username} , Type is ${this.typename} Level is ${this.level}`;
    }
}
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details());
console.log(player2.details());
console.log(player3.details());
console.log(player4.details());
//# sourceMappingURL=index.js.map