export default class User {
    constructor(name,email,birth,role,active = true ){
        this.name = name
        this.email = email
        this.birth = birth
        this.role = role || "student"
        this.active = active
    }

    displayInfo(){
        return `${this.name}, ${this.email}`
    }

}

const newUser = new User('Felipe', 'fe@gmail.com', '08/01/2003')
//console.log(newUser);
//console.log(newUser.displayInfo());

//console.log(User.prototype.isPrototypeOf(newUser));
