/*
    instruction: setup the instructor schema according to the following requirements:
    - name: (String, required)
    - expertise: (String) - Area of expertise or specialization
    - email: (String) - Contact email for the instructor
*/
const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("Instructor", instructorSchema);
