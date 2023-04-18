class Users{
    name = "";
    setName(name:string){
        this.name = name;
    }
    displayName(){
        console.log(this.name);
    }
}

const u1 = new Users();
u1.setName("Ish")
u1.displayName()
