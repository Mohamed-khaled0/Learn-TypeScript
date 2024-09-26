interface Play {
    id: number;
    title: string;
    level: number | string;
    logIn(): void;
    logOut(msg: string): void;
}

class Player1 implements Play {
    constructor(
        public id: number,
        public title: string,
        public level: number | string
    ) {}

    logIn(): void {
        console.log("Logged In");
    }

    logOut(msg: string): void {
        console.log(`Logged Out, ${msg}`);
    }
}

let player1 = new Player1(100, "Elzero", 95);

console.log(player1.id);
console.log(player1.title);
console.log(player1.level);
player1.logIn();
player1.logOut("Good Bye");
