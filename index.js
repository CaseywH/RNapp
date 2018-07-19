const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const keys = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

//require routes
const index = require("./routes/index");
const auth = require("./routes/auth");
const profile = require("./routes/profile");
const cert = require("./routes/cert");

//require models
require("./models/User");
require("./models/Profile");
require("./models/Cert");
//passport config
require("./config/passport");

//express application
const app = express();

//connect to mongoDB via mongoose
mongoose
  .connect(keys.mongoDB)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
//body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
//methodOverride middleware
app.use(methodOverride("_method"));
//path static files
app.use(express.static(path.join(__dirname, "public")));
//handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//cookieSaeeion middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//set local variables
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

//use routes
app.use("/", index);
app.use("/auth", auth);
app.use("/profile", profile);
app.use("/cert", cert);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Spinning up on port ${port}`);
});
