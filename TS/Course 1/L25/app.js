"use strict";
class Users {
    constructor() {
        this.name = "";
        this.email = "";
    }
    addUser(user) {
        return `${user} is Added`;
    }
    removeUser(user) {
        console.log(`${user} is Removed`);
    }
}
let User1 = new Users();
let result = User1.addUser("Ish");
console.log(result);
User1.removeUser("Yogi");
