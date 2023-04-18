class Users{
    name: '' = "";
    email: '' = "";

    addUser(user:string){
        return `${user} is Added`
    }
    removeUser(user:string){
        console.log(`${user} is Removed`);
        
    }
}

let User1 = new Users();
let result = User1.addUser("Ish")
console.log(result);

User1.removeUser("Yogi")
