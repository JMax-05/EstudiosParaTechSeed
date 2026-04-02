import { sum } from './math/sum.js'
import { multiply } from './math/multiply.js'
import Admin from './users/admin.js'
import User from './users/user.js'

const user1 = new User("Maxito", 27)
const admin1 = new Admin("Ariadna", 18)

admin1.greet()
user1.greet()

console.log(sum(user1.birthday(),admin1.birthday()))
console.log(multiply(user1.birthday(),admin1.birthday()))

admin1.newName(admin1, "Ari")
admin1.newName(user1, "Max")

admin1.newAge(admin1, 19)
admin1.newAge(user1, 28)

console.log(sum(user1.birthday(),admin1.birthday()))
console.log(multiply(user1.birthday(),admin1.birthday()))