import User from "./User.js"

export default class Teacher extends User {
    constructor (name,birth,email,role = "Teacher", active = true){
        super(name,email,birth,role,active)
    }
    aproveUser(student, course){
        return `The student ${student} aproved in the course ${course}, responsible ${this.name}`
    }
}

const newTeacher = new Teacher("Vanildinha", "20/05/99", "Va@gmail.com")
console.log(newTeacher.displayInfo())
console.log(newTeacher.aproveUser("felipinho", "ADS"));

