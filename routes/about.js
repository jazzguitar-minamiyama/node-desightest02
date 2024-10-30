const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("about ok");
  res.render("about", {
    layout: "./layouts/about",
  });
});

module.exports = router;
