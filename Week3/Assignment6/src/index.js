"use strict";
class Show {
    constructor(_title) {
        this._title = _title;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
}
let tester1 = new Show("Elzero");
tester1.title = "Osama";
console.log(tester1.title);
tester1.title = "Osama";
console.log(tester1.title);
//# sourceMappingURL=index.js.map