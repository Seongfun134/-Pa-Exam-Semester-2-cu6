/*
    instruction: setup the routes for the instructor entity according to the following requirements:
    - `GET /instructors`: List all instructors
    - `GET /instructors/:id`: Get a specific instructor by its id
    - `POST /instructors`: Add a new instructor
    - `PUT /instructors/:id`: Update an instructor
    - `DELETE /instructors/:id`: Delete an instructor
*/

const express = require("express");
const router = express.Router();
const {
  getInstructors,
  getInstructor,
  AddNewInstructor,
  updateInstructor,
  deleteInstructor,
} = require("../controllers/instructor");

router.get("/", getInstructors);
router.get("/:id", getInstructor);
router.post("/", AddNewInstructor);
router.put("/:id", updateInstructor);
router.delete("/:id", deleteInstructor);

module.exports = router;
