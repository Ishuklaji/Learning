class CreateAccount {
  makeEmail(user: string) {
    return `${user}@gmail.com`;
  }
}

class Users extends CreateAccount {
  addUser(user: string) {
    return `${user} added an an User`;
  }
  deleteUser() {}
}

const U1 = new Users();
console.log(U1.addUser("Ish Shukla"));
console.log(U1.makeEmail("ish"));

class Employees extends CreateAccount{
  addEmployees(employee: string) {
    return `${employee} added`;
  }
}

const E1 = new Employees();
console.log(E1.addEmployees("Ish Shukla"));
console.log(E1.makeEmail("ish"));

