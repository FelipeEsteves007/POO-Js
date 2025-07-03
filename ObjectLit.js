const user = {
    name: 'Felipe',
    email: 'felipe@gmail.com',
    birth: '08/01/2003',
    active: true,
    information: function(){
        console.log(this.name, this.email, this.birth, this.active);
    }
}

const display = function(){
    console.log(this.name, this.email)
}

const displayName = display.bind(user)
displayName()
