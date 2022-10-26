const express = require("express");
const app = express();
const port = process.env.Port || 5000;

const cors = require("cors");

app.use(cors());
const course = require("./Data/course.json");
const coursesname = require("./Data/coursesname.json");

app.get("/", (req, res) => {
  res.send("News Api Running");
});

app.get("/courses", (req, res) => {
  res.send(course);
});
app.get("/course", (req, res) => {
  res.send(coursesname);
});
app.get('/course/:id',(req,res)=>
{
    const id=req.params.id;
    const selectedcourse=course.find(n=>n.id===id);
    res.send(selectedcourse)
})



app.listen(port, () => {
  console.log("running", port);
});
