"use strict";
class CreateAccount {
    makeEmail(user) {
        return `${user}@gmail.com`;
    }
}
class Users extends CreateAccount {
    addUser(user) {
        return `${user} added an an User`;
    }
    deleteUser() { }
}
const U1 = new Users();
console.log(U1.addUser("Ish Shukla"));
console.log(U1.makeEmail("ish"));
class Employees extends CreateAccount {
    addEmployees(employee) {
        return `${employee} added`;
    }
}
const E1 = new Employees();
console.log(E1.addEmployees("Ish Shukla"));
console.log(E1.makeEmail("ish"));
