var express = require("express");
var router = express.Router();
const passport = require("passport");

//google Auth
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {}),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

//Facebook Auth
router.get("/facebook", passport.authenticate("facebook", {}));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  function(req, res) {
    console.log(req.user);

    // Successful authentication, redirect home.
    res.redirect("/dashboard");
  }
);

//logout
router.get("/logout", (req, res) => {
  req.logout();
  res.send("You have been logged out.");
});

module.exports = router;
