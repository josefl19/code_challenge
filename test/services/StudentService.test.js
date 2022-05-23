const Reader = require('./../../lib/utils/Reader');
const StudentService = require('./../../lib/services/StudentService');

const students = Reader.readJsonFile("./test/data/visualpartners_test.json");

describe("Test StudentService class", () => {
    test("Test studentsAllFields method", () => {
        const studentsService = StudentService.studentsAllFields(students);
        
        expect(studentsService).toStrictEqual([
            {
                "id": "6264d5d89f1df827eb84bb23",
                "name": "Warren",
                "email": "Todd@visualpartnership.xyz",
                "credits": 508,
                "enrollments": [
                  "Visual Thinking Intermedio",
                  "Visual Thinking Avanzado"
                ],
                "previousCourses": 1,
                "haveCertification": true
              },
              {
                "id": "6264d5d85cf81c496446b67f",
                "name": "Lucinda",
                "email": "Sexton@visualpartnership.xyz",
                "credits": 677,
                "enrollments": [
                  "Visual Thinking Avanzado"
                ],
                "previousCourses": 6,
                "haveCertification": true
              }
        ]);
    });

    test("Test emailStudentsWithCertification method", () => {
        const mailStudents = StudentService.emailStudentsWithCertification(students);
        expect(mailStudents).toStrictEqual(["Todd@visualpartnership.xyz", "Sexton@visualpartnership.xyz"])
    });

    test("Test studentsWith500Credits method", () => {
        const students500Credits = StudentService.studentsWith500Credits(students, 500);
        expect(students500Credits).toStrictEqual(["Warren", "Lucinda"]);
    });
});