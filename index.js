const express = require("express");
const mongoose = require("mongoose");
const cookieparser = require('cookie-parser')

const app = express();
// Middleware
app.use(express.urlencoded({extended: true}));
app.use(cookieparser());


mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backendtest",
  })
  .then(() => console.log("Database connected"))
  .catch(() => console.log("error connecting"));

// Schema creation for adding to our database
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});
// Model creation for adding to our database
const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  const token = req.cookies.token;  
  if(token) {
    res.render("logout.ejs");
  }
  else{
    res.render("login.ejs");
    }
  });
  
  app.all("/login", (req, res) => {
    const {name, email} = req.body;
    User.create({name, email})
    res.cookie("token", "iamin")
    res.redirect("/");
});

app.all("/logout", (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now())
  })
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
