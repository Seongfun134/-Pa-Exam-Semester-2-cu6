/*
    instruction: setup the controller functions to handle course enrollments
    - getEnrollmentsByCourse - Retrieve all enrollments for a specific course (use `populate()` to get course details)
    - createEnrollment - Create a new enrollment for a course (ensure no duplicate enrollments for the same email and course)
*/
const Enrollment = require("../models/enrollment");

const getEnrollmentsByCourse = async (req, res) => {
  try {
    const { course } = req.query;
    const enrollments = await Enrollment.find({ course }).populate("course");
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createEnrollment = async (req, res) => {
  try {
    const { course, email } = req.body;

    const existing = await Enrollment.findOne({ course, email });
    if (existing)
      return res
        .status(400)
        .json({ error: "This email is already enrolled for this course" });

    const enrollment = new Enrollment(req.body);
    const saved = await enrollment.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getEnrollmentsByCourse, createEnrollment };
