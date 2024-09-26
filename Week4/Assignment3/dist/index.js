"use strict";
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(discount) {
        return `The Discount Is ${discount}`;
    }
}
let gameOne1 = new Game("Ys", 100);
let gameTwo2 = new Game(2064, 100);
console.log(gameOne1.title);
console.log(gameOne1.price);
gameOne1.getDiscount("50");
console.log(gameTwo2.title);
console.log(gameTwo2.price);
gameTwo2.getDiscount(80);
//# sourceMappingURL=index.js.map