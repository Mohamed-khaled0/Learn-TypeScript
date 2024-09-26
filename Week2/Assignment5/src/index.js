"use strict";
function isHeOld(age) {
    if (typeof age !== "number") {
        throw new Error("Invalid input: The value must be a number");
    }
}
console.log(isHeOld("100"));
console.log(isHeOld(45));
console.log(isHeOld(30));
//# sourceMappingURL=index.js.map