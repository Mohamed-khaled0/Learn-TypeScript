"use strict";
var Game1;
(function (Game1) {
    Game1[Game1["Easy"] = 100] = "Easy";
    Game1[Game1["Medium"] = 80] = "Medium";
    Game1[Game1["Hard"] = 30] = "Hard";
})(Game1 || (Game1 = {}));
function getInsane(num) {
    return Game1.Hard - num;
}
console.log(Game1.Easy);
console.log(Game1.Medium);
console.log(Game1.Hard);
console.log(getInsane(0));
//# sourceMappingURL=index.js.map