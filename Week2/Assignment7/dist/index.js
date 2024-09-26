"use strict";
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
})(Game || (Game = {}));
function getInsane(num) {
    return Game.Hard - num;
}
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
console.log(getInsane(0));
//# sourceMappingURL=index.js.map