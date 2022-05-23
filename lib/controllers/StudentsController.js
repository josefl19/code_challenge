const Reader = require("./../utils/Reader");
const StudentService = require("./../services/StudentService");
const students = Reader.readJsonFile("./data/visualpartners.json");

class StudentController {
    static getAllStudents() {
        return StudentService.studentsAllFields(students);
    }

    static getStudentsWithCertification() {
        return StudentService.emailStudentsWithCertification(students);
    }

    static getStudentsWithMoreOf500Credits(credits) {
        return StudentService.studentsWith500Credits(students, credits);
    }
}

module.exports = StudentController;