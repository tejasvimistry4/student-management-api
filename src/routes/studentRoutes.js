const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const validateStudent = require("../validators/studentValidator");

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", validateStudent, createStudent);
router.put("/:id", validateStudent, updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
