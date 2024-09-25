"use strict";
function printInConsole(...args) {
    for (let arg of args) {
        console.log(`The Value Is ${arg} And Type Is ${typeof arg}`);
    }
    console.log("Done");
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=index.js.map