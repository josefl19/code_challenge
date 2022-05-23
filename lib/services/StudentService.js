class StudentService {
    static studentsAllFields(students) {
        return students;
    }

    static emailStudentsWithCertification(students) {
        const studentsCertificated = students.filter((student) => student.haveCertification === true);
        const studentsEmail = studentsCertificated.map((student) => student.email);

        return studentsEmail;
    }

    static studentsWith500Credits(students, credits) {
        const students500Cred = students.filter((student) => student.credits > credits);
        const nameStudents = students500Cred.map((student) => student.name);

        return nameStudents;
    }
}

module.exports = StudentService;