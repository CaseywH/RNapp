const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const User = require("../models/User");

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
  User.findById(req.user._id).then(user => {
    Profile.create(newProfile)
      .save()
      .then(newProfile => {
        user.profile = newProfile;
        user.save();
        res.redirect("/user/profile");
      });
  });
});

//edit profile
router.get("/edit", (req, res) => {
  res.render("./user/profile-edit");
});

//save edit to profile
router.put("/", (req, res) => {
  let editProfile = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    title: req.body.title,
    nursingSchool: req.body.nursingSchool,
    postGrad: req.body.postGrad,
    employment: req.body.employment
  };
  User.findByIdAndUpdate(req.user._id, editProfile)
    .then(user => {
      res.redirect("/");
    })
    .catch(err => {
      res.redirect("/");
    });
});

module.exports = router;
