import StudentManager, { Student } from "./modules/student-manager.module"

const myStudent: Student = {
    name: 'Mahmoud Ahmed',
    age: 25,
    hobbies: [
        { name: 'Programming', description: 'I love programming' },
        { name: 'Reading', description: 'I love reading' },
    ]
}

const StudentA: StudentManager = new StudentManager(myStudent)

console.log(StudentA.getName())
StudentA.setName('Mahmoud Ahmed Abdelrahman')
console.log(StudentA.getHobby(0).description)
console.log(StudentA.getName())