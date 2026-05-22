// server.js
import express from "express";
import courses from "./course.js";
const app = express();
const PORT = 3000;

// Route: GET /departments/:dept/courses
app.get("/departments/:dept/courses", (req, res) => {
  const { dept } = req.params;
  const { level, minCredits, maxCredits, semester, instructor } = req.query;
  // Implementing the filter logic
  // Hint: Use the filter method to filter the courses array based on the provided criteria
  const filteredCourses = courses
    .filter((course) => course.department === dept)
    .filter((course) => !level || course.level === level)
    .filter((course) => !minCredits || course.credits >= Number(minCredits))
    .filter((course) => !maxCredits || course.credits <= Number(maxCredits))
    .filter((course) => !semester || course.semester === semester)
    .filter((course) => !instructor || course.instructor === instructor);

  res.json(filteredCourses);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
