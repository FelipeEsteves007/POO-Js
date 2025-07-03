function User (name, email){
    this.name = name
    this.email = email

    this.information = function(){
        return `${this.name} ${this.email}`
    }
}

const newUser = new User ('Felipe', 'fe@.com')
console.log(newUser.information());
