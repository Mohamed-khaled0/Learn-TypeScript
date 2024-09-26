class Game<T> {
    constructor(public title: T, public price: number) {}

    getDiscount(discount: number | string): string {
        return `The Discount Is ${discount}`;
    }
}

// Do Not Edit Here
let gameOne1 = new Game<string>("Ys", 100);
let gameTwo2 = new Game<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne1.title); // "Ys"
console.log(gameOne1.price); // 100
gameOne1.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo2.title); // 2064
console.log(gameTwo2.price); // 100
gameTwo2.getDiscount(80); // "The Discount Is 80"
