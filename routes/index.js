const express = require("express");
const router = express.Router();

// router.use(express.static("public"));
// router.use("/css", express.static(__dirname + "public/css"));
// router.use("/images", express.static(__dirname + "public/images"));
// router.use("/js", express.static(__dirname + "public/js"));
// router.use("/images_photo", express.static(__dirname + "public/images_photo"));
// router.use("/base", express.static(__dirname + "public/base"));

//layout.evs上にabout.ejsレンダリング
router.get("/", (req, res) => {
  //   console.log("ok");
  res.render("index", {
    layout: "./layouts/index",
  });
});

module.exports = router;
