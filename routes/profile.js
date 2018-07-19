const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

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
  let newProfile = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    title: req.body.title,
    nursingSchool: req.body.nursingSchool,
    postGrad: req.body.postGrad,
    employment: req.body.employment
  };
  new Profile(newProfile).save().then(profile => {
    res.redirect("/user/profile");
  });
});

//edit profile
router.get("/edit", (req, res) => {
  res.render("./user/profile-edit");
});

//save edit to profile
router.put("/", (req, res) => {
  res.redirect("/user/profile");
});

module.exports = router;
