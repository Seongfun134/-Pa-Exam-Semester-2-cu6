/*
    instruction: setup the enrollment schema according to the following requirements:
    - course: (ObjectId, ref: 'Course', required)
    - name: (String, required)
    - email: (String, required)
    - phone: (String, required)
    - enrollmentDate: (Date, default: Date.now)
*/
const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  enrollmentDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);
