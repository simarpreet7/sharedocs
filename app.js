var express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  User = require("./models/user"),
  drivemodel = require("./models/drivemodel"),
  LocalStrategy = require("passport-local"),
  _document = require("./models/_document"),
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

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
  res.render("login");
});


// app.post("/drive/:id", isLoggedIn, function (req, res) {

//   //   drivemodel.find({current_user:req.params.id,_document_name:req.body.d_name}, (err, docs) => {

//   //     var w=docs;
//   //     _document.find({_id:w.doc_id}, (err, docs) => {

//   //       res.render("word",{doc_text:docs.name})
//   //     })
//   // })
//   res.render("word",{doc_text:"wow"})
//   });

// app.get("/open", isLoggedIn, function (req, res) {

//   res.redirect('/word/' + req.user.username+);
// });

app.get("/drive/:id", isLoggedIn, function (req, res) {

  drivemodel.find({ user_id: req.params.id }, (err, docs) => {
    var c = docs;
    if (err)
      res.send("error1")
    // _document.find({ _id: c[0].doc_id }, (err, docs) => {
    //   if (err)
    //     res.send("error2")
    //   else {
    //     res.render("drive", {user_name: req.params.id, doc_: docs});
    //   }
    // });
    else
    {
      var doca=new Array();
    
      for(var i=0;i<c.length;++i)
      {
         _document.find({_id:c[i].doc_id},(err,docs)=>{
               doca.push(docs[0]);
                  if(doca.length==c.length)
                  {
                    res.render("drive", {user_name: req.params.id, doc_: doca});
                  }
              
          });
          

         
      }
       
        
     
    }
  });

});

app.get("/word/:id/:docname", isLoggedIn, function (req, res) {

  res.render("word", { doc_text: req.params.docname });
});

app.get("/sheets/:id", isLoggedIn, function (req, res) {

  res.render("sheets");
});


app.get("/word/:id", isLoggedIn, function (req, res) {
 if(req.params.id==req.user.username)
 {
  res.render("word", { doc_text: "" });
 }
 else
 {
  _document.find({_id:req.params.id},(err,docs)=>{
    res.render("word",{doc_text:docs[0].name})
  })
   
 }
});
app.post("/word/:id", isLoggedIn, function (req, res) {


  var new__document = new _document({
    name: req.body.fname,//doc data
    created_by: req.user.username,
    document_name: req.body.save_fname,
  });
  new__document.save(function (err) {

    var new_drive = new drivemodel({
      doc_id: new__document._id,
      user_id: req.user.username,
      // date:Date.now,
    });
    new_drive.save(function (err) {
      res.send("data saved succesful");
    })

  });


  //   var await messageModel.find({
  //     adId: req.params.id,
  //     userId: req.session.user._id
  // })

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
    res.redirect("/drive/" + req.body.username);
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