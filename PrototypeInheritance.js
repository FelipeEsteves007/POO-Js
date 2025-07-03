const user = {
    name: 'Felipe',
    email: 'felipe@gmail.com',
    birth: '08/01/2003',
    active: true,
    information: function(){
        console.log(this.name, this.email, this.birth, this.active);
    }
}

const admin = {
    name: 'Lari',
    email: 'lari@gmail.com',
    birth: '20/04/2002',
    role: 'admin',
    active: true,
    addCourse: function(){
        console.log('Course Created!');
    }
}

Object.setPrototypeOf(admin, user)
admin.addCourse()
admin.information()