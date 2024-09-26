"use strict";
let user1 = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
let updatedUser = Object.assign(Object.assign({}, user1), { state: false });
user1.id = 200;
user1.id = "200";
user1.state = false;
//# sourceMappingURL=index.js.map