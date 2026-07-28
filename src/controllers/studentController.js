const students = require("../utils/studentData");
const Student = require("../models/studentSchema");

const getAllStudents = (req, res, next) => {
  try {
    let result = [...students];

    if (req.query?.name) {
      const searchName = req.query.name.toLowerCase();

      result = result.filter((student) =>
        student.name?.toLowerCase().includes(searchName),
      );
    }

    if (req.query?.sort === "name") {
      result.sort((a, b) => a.name?.localeCompare(b.name));
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const createStudent = (req, res, next) => {
  try {
    const { name, email, course } = req.body;

    const existingStudent = students.find(
      (student) => student.email?.toLowerCase() === email?.toLowerCase(),
    );

    if (existingStudent) {
      return res.status(409).json({
        message: "Student with this email already exists.",
      });
    }

    const newStudent = {
      id: students.length + 1,
      name,
      email,
      course,
    };
    students.push(newStudent);

    res.status(201).json(newStudent);
  } catch (error) {
    next(error);
  }
};

const getStudentById = (req, res, next) => {
  try {
    const id = parseInt(req.params?.id);

    const student = students.find((student) => student.id === id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
};

const updateStudent = (req, res, next) => {
  try {
    const id = parseInt(req.params?.id);

    const student = students.find((student) => student.id === id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    const { name, email, course } = req.body;

    student.name = name;
    student.email = email;
    student.course = course;

    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
};

const deleteStudent = (req, res, next) => {
  try {
    const id = parseInt(req.params?.id);

    const studentIndex = students.findIndex((student) => student.id === id);

    if (studentIndex === -1) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    students.splice(studentIndex, 1);

    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
