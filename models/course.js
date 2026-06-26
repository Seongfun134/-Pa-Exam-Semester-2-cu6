/*
    instruction: setup the course schema according to the following requirements:
    - title: (String, required)
    - instructor: (ObjectId, ref: 'Instructor', required)
    - startDate: (Date, required)
    - duration: (String, required)
    - category: (String)
    - description: (String)
*/
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
  startDate: { type: Date, required: true },
  duration: { type: String, required: true },
  category: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("Course", courseSchema);
