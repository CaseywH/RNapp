const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");

//require routes
const index = require("./routes/index");
const auth = require("./routes/auth");
//config keys
const keys = require("./config/keys");

//express application
const app = express();

//connect to mongoDB via mongoose
mongoose
  .connect(keys.mongoDB)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//path static files
app.use(express.static(path.join(__dirname, "public")));
//handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//use routes
app.use("/", index);
app.use("/auth", auth);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Spinning up on port ${port}`);
});
