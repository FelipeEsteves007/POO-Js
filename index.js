import User from "./User.js"
import Admin from "./Admin.js"
import Teacher from "./Teacher.js"

const newUser = new User ("felps", "20/20/20")
console.log(newUser.displayInfo());

const newAdmin = new Admin ("FEFE", "01/08/99")
//console.log(newAdmin.displayInfo());

const newTeacher = new Teacher("Fe Teacher", "0108/08")
//console.log(newTeacher.displayInfo());

const fic = User.displayInfoGeneric('Lipinho', "f@f")
console.log(fic);

