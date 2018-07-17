var express = require("express");
var router = express.Router();

//cert page
router.get("/:id", (req, res) => {
  res.render("./user/cert");
});
//create cert
router.get("/create", (req, res) => {
  res.render("./user/cert-create");
});

//save cert
router.post("/", (req, res) => {
  res.redirect("../dashboard");
});

//edit cert
router.get("/edit", (req, res) => {
  res.render("./user/cert-edit");
});

//save edit to cert
router.put("/", (req, res) => {
  res.redirect("/");
});

module.exports = router;
