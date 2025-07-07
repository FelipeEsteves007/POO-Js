import User from "./User.js"
import Admin from "./Admin.js"
import Teacher from "./Teacher.js"

const newUser = new User ("felps", "20/20/20")

console.log(newUser.displayInfo());
newUser.name = "FE"
console.log(newUser.name);


