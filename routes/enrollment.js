/*
    instruction: This file defines the routes for managing course enrollments.
    - `GET /enrollments?course=xxx`: Get all enrollments for a specific course
    - `POST /enrollments`: Create a new enrollment for a course
*/
const express = require("express");
const router = express.Router();
const {
  getEnrollmentsByCourse,
  createEnrollment,
} = require("../controllers/enrollment");

router.get("/", getEnrollmentsByCourse);
router.post("/", createEnrollment);

module.exports = router;
