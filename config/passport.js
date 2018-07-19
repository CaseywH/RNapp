const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const keys = require("./keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookAuth.clientID,
      clientSecret: keys.facebookAuth.clientSecret,
      callbackURL: keys.facebookAuth.callback
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ "facebook.id": profile.id });
      if (existingUser) {
        //we already have a record with the given profile ID
        return done(null, existingUser);
      }
      //we dont have record with this ID, make a new reord
      const user = await new User({ "facebook.id": profile.id }).save();
      console.log(user);

      done(null, user);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ "google.id": profile.id });
      if (existingUser) {
        //we already have a record with the given profile ID
        return done(null, existingUser);
      }
      //we dont have record with this ID, make a new reord
      const user = await new User({ "google.id": profile.id }).save();
      done(null, user);
    }
  )
);
