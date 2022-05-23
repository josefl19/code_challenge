const StudentController = require("./../lib/controllers/StudentsController");
const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Code Challenge: Visual Thinking API"});
});

app.get("/v1/students", (req, res) => {
    res.json(StudentController.getAllStudents());
});

app.get("/v1/students/emails", (req, res) => {
    res.json(StudentController.getStudentsWithCertification());
});

app.get("/v1/students/credits/:amount", (req, res) => {
    res.json(StudentController.getStudentsWithMoreOf500Credits(req.params.amount));
});

app.listen(port, () => {
    console.log(`Code Challenge: Visual Thinking API in localhost:${port}`);
});