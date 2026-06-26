const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5123;

app.use(express.json());

// instruction: setup cors
app.use(cors());
// instruction: setup MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/coursedb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
// instruction: setup routes
app.use("/courses", require("./routes/course"));
app.use("/instructors", require("./routes/instructor"));
app.use("/enrollments", require("./routes/enrollment"));

app.get("/", (req, res) => {
  res.send("Good luck with the exam!");
});

// Server listening
app.listen(port, () => console.log(`Server started on port ${port}`));
