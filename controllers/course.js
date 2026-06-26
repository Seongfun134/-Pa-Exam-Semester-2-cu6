/*
    Instruction: setup the course controller with the following functions:
    - getCourses - Retrieve all courses (use `populate()` to get instructor details)
    - getCourse - Retrieve a specific course (use `populate()` to get instructor details)
    - AddNewCourse - Add a new course
    - updateCourse - Update a course
    - deleteCourse - Delete a course
*/
const Course = require("../models/course");

const getCourses = async (req, res) => {
  try {
    const { category, sort, page = 1, limit = 10 } = req.query;

    const filter = {};
    if (category) filter.category = category;

    const sortObj = {};
    if (sort) {
      const [field, order] = sort.split(":");
      sortObj[field] = order === "desc" ? -1 : 1;
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const courses = await Course.find(filter)
      .populate("instructor")
      .sort(sortObj)
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Course.countDocuments(filter);

    res.json({ total, page: parseInt(page), limit: parseInt(limit), courses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCourse = async (req, res) => {
  try {
    const course = await course.findById(req.params.id).populate("instructor");
    console.log();
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const AddNewCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    const saved = await course.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getCourses,
  getCourse,
  AddNewCourse,
  updateCourse,
  deleteCourse,
};
