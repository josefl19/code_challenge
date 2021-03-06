const Reader = require('./../../lib/utils/Reader');

describe("Testing Reader class", () => {
    test("Reading a visualpartners file", () => {
        const data = Reader.readJsonFile("./test/data/visualpartners_test.json");
        expect(data).not.toBeUndefined();
        expect(data).toStrictEqual([
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
});