export default class User {
    #name
    #email
    #birth
    #role
    #active
    constructor(name,email,birth,role,active = true ){
        this.#name = name
        this.#email = email
        this.#birth = birth
        this.#role = role || "student"
        this.#active = active
    }

    get name(){
        return this.#name
    }

    get email(){
        return this.#email
    }

     get birth(){
        return this.#birth
    }

     get role(){
        return this.#role
    }
    
    get active(){
        return this.#active
    }

    set name(newName){
        if (newName === ""){
            throw new Error("Invalid name");   
        }
        this.#name = newName
    }

    displayInfo(){
        return `${this.name}, ${this.email}`
    }

}

const newUser = new User('Felipe', 'fe@gmail.com', '08/01/2003')
//console.log(newUser);
//console.log(newUser.displayInfo());

//console.log(User.prototype.isPrototypeOf(newUser));
