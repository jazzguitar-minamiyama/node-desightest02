//Imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");

const app = express();
const PORT = 5002;

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images_photo", express.static(__dirname + "public/images_photo"));
app.use("/base", express.static(__dirname + "public/base"));

//Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/index.ejs");
app.set("view engine", "ejs");

//Navigation
// app.get("", (req, res) => {
//   res.render("index");
// });
app.use("/", indexRouter);
// app.get("/about", (req, res) => {
//   console.log("about ok");
//   res.render("about", {
//     layout: "./layouts/about",
//   });
// });
app.use("/about", aboutRouter);
// app.get("/gallery", (req, res) => {
//   res.render("gallery", {
//     layout: "./layouts/gallery",
//   });
// });
// app.get("/contact", (req, res) => {
//   res.render("contact", {
//     layout: "./layouts/contact",
//   });
// });
// app.get("/confirm", (req, res) => {
//   res.render("confirm", {
//     layout: "./layouts/confirm",
//   });
// });
// app.get("/form", (req, res) => {
//   res.render("form", {
//     layout: "./layouts/form",
//   });
// });
// app.get("/finish", (req, res) => {
//   res.render("finish", {
//     layout: "./layouts/finish",
//   });
// });
// app.use(expressLayouts);

app.listen(PORT, () => console.log(`App lisetn on port ${PORT}`));
