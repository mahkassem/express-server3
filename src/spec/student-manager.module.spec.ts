import StudentManager, { Student } from "../modules/student-manager.module"
let studentData: Student
let student: StudentManager

describe('Student Manager Module', () => {
    beforeAll(() => {
        studentData = {
            name: 'John Doe',
            age: 20,
            hobbies: [
                { name: 'Football', description: 'Play football' },
            ]
        }
        student = new StudentManager(studentData)
    })

    it('1. Should set/get name of student', () => {
        student.setName('John Doe 2')
        expect(student.getName()).toBe('John Doe 2')
    })

    it('2. Should set/get age of student', () => {
        student.setAge(21)
        expect(student.getAge()).toBe(21)
    })
})