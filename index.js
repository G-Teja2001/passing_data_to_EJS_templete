import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 3000;
var total_letters = 0
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
  
});

app.post("/submit", (req, res) => {
  total_letters = req.body["fName"].length + req.body["lName"].length 
  console.log(total_letters)
  res.render("index.ejs",{lettercount:total_letters})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
