class Users {
  constructor(public name: string, public age: number, public email: string) {}
  displayName() {
    console.log(this.name, this.age, this.email);
  }
}
const u1 = new Users("Ish", 22, "ish@gmail.com");
