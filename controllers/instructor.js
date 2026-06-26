/*
    instruction: setup the instructor controller with the following functions:
    - getInstructors - Retrieve all instructors
    - getInstructor - Retrieve a specific instructor
    - AddNewInstructor - Add a new instructor
    - updateInstructor - Update an instructor
    - deleteInstructor - Delete an instructor
*/

const Instructor = require("../models/instructor");

const getInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor)
      return res.status(404).json({ error: "Intructor not found" });
    res.json(instructor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const AddNewInstructor = async (req, res) => {
  try {
    const instructor = new Instructor(req.body);
    const saved = await instructor.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!instructor)
      return res.status(404).json({ error: "Instructor not found" });
    res.json(instructor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndDelete(req.params.id);
    if (!instructor)
      return res.status(404).json({ error: "Instructor not found" });
    res.json({ message: "Instructor deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getInstructors,
  getInstructor,
  AddNewInstructor,
  updateInstructor,
  deleteInstructor,
};
