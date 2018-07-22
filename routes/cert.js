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
  let newCert = {
    title: req.body.title,
    category: req.body.category,
    issued: req.body.issued,
    expiration: req.body.expiration,
    image: ""
  };
  User.findById(req.body.user._id).then(user => {
    Cert.create(newCert).then(cert => {
      user.certifications.push(cert);
      res.redirect("../dashboard");
    });
  });
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
