/*
    instruction: setup the course routes according to the following requirements:
    - `GET /courses`: List all courses with sorting, pagination and filtering
    - `GET /courses/:id`: Get a specific course by its id
    - `POST /courses`: Add a new course
    - `PUT /courses/:id`: Update a course
    - `DELETE /courses/:id`: Delete a course
*/
const express = require("express");
const router = express.Router();
const {
  getCourses,
  getCourse,
  AddNewCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course");

router.get("/", getCourses);
router.get("/:id", getCourse);
router.post("/", AddNewCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

module.exports = router;
