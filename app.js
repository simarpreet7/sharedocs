var express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  User = require("./models/user"),
  LocalStrategy = require("passport-local"),
  _document = require("./models/document"),
  passportLocalMongoose = require("passport-local-mongoose");

var app = express();
path = require("path");
app.use("/public", express.static("public"));

mongoose.connect("mongodb://localhost/share");




app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(
  require("express-session")({
    secret: "sam says wow",
    resave: false,
    saveUninitialized: false
  })
);

app.set("view engine", "ejs");
//Then, tell express to use Passport:
app.use(passport.initialize());
app.use(passport.session());
//
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
  res.render("login");
});


app.get("/drive/:id", isLoggedIn, function (req, res) {
  // req.params= { id:req.user.id}
  res.render("drive",{user_name:req.params.id});
});



app.get("/word", isLoggedIn, function (req, res) {
  // req.params= { id:req.user.id}
  res.redirect('/word/'+req.user.username)
});

app.get("/word/:id", isLoggedIn, function (req, res) {
  // req.params= { id:req.user.id}
  res.render("word")
});
app.post("/word/:id", isLoggedIn,function (req, res) {
 
  //two files require to access username and fname
  
  var new_document = new _document({
    name: req.body.fname,
    created_by:req.user.username,
  });
  new_document.save(function(err){
    res.send("data saved succesful");

  });

});

// Auth Routes

app.get("/signup", function (req, res) {
  res.render("signup");
});

//handling user sign up
app.post("/signup", function (req, res) {

  User.register(
    new User({
      username: req.body.username
    }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.render("signup");
      } //user stragety
      passport.authenticate("local")(req, res, function () {
        res.redirect("/login"); //once the user sign up
      });
    }
  );
});

// Login Routes

app.get("/login", function (req, res) {
  res.render("login");
});

// middleware
app.post(
  "/login",
  passport.authenticate("local", {
    // successRedirect: "/word",
    failureRedirect: "/login"
  }),
  function (req, res) {
    // res.send("User is " + req.user.id);
    res.redirect("/drive/"+req.body.username)
  }
);

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  //user does not exist
  res.redirect("/login");
}

app.listen(3000);