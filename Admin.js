import User from "./User.js"

export default class Admin extends User {
    constructor(name,email,birth,role = "admin",active = true){
        super(name,email,birth,role,active)
    }

    displayInfo(){
        const info = super.displayInfo()
        return `admin- ${info}`
    }

    addCourse(nameCourse, vacancies){
        return `Course created ${nameCourse} with ${vacancies} vacancies`
    }
}

const newAdmin = new Admin("Lari", "lari@gmail.com", "20/04/2002")
//console.log(newAdmin.displayInfo());
//console.log(newAdmin.addCourse('Js', '6'));

