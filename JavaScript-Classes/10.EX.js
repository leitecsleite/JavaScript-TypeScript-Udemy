class Usuario {
    constructor(email, password){
        this.email =email; 
        this.password =password; 
    }

    isAdmin(){
        if(!this.admin){
            return false; 
        }
        return this.admin; 
    }
}

class Admin extends Usuario{
    constructor(email, password){
        super(email, password)
        this.admin = true; 
    }
}

const User1 = new Usuario('email@test.com', 'senha123'); 
const Admin1 = new Admin('email@test.com', 'senha123'); 

console.log(User1.isAdmin()); 
console.log(Admin1.isAdmin()); 