var express = require("express");
var router = express.Router();

//profile page
router.get("/", (req, res) => {
  res.render("./user/profile");
});
//create profile
router.get("/create", (req, res) => {
  res.render("./user/profile-create");
});

//save profile
router.post("/", (req, res) => {
  res.redirect("/");
});

//edit cert
router.get("/edit", (req, res) => {
  res.render("./user/profile-edit");
});

//save edit to cert
router.put("/", (req, res) => {
  res.redirect("/");
});

module.exports = router;
