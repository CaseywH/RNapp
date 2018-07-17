var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("landing");
});
router.get("/dashboard", (req, res) => {
  res.render("./user/dashboard");
});

router.get("/profile", (req, res) => {
  res.render("./user/profile");
});

router.get("/profile/edit", (req, res) => {
  res.render("./user/profile-edit");
});

module.exports = router;
