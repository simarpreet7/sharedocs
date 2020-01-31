var express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  User = require("./models/user"),
  drivemodel = require("./models/drivemodel"),
  LocalStrategy = require("passport-local"),
  _document = require("./models/_document"),
  _ = require("lodash"),
 
  uniqueValidator = require('mongoose-unique-validator'),
 
  passportLocalMongoose = require("passport-local-mongoose");

var app = express();
path = require("path");
app.use("/public", express.static("public"));
const Swal = require('sweetalert2')
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/share", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});



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


app.get("/drive", isLoggedIn, function (req, res) {
  res.redirect('/drive/' + req.user.username);
});

app.get("/drive/:id", isLoggedIn, function (req, res) {

  drivemodel.find({
    user_id: req.params.id
  }, function (err, docs) {
    var c = docs;
    if (err) {
      res.send("error1");
    }
    // _document.find({ _id: c[0].doc_id }, (err, docs) => {
    //   if (err)
    //     res.send("error2")
    //   else {
    //     res.render("drive", {user_name: req.params.id, doc_: docs});
    //   }
    // });
    else {
      var doca = new Array();

      for (var i = 0; i < c.length; ++i) {
        _document.find({
          _id: c[i].doc_id
        }, (err, docs) => {
          doca.push(docs[0]);
          if (doca.length == c.length) {
            res.render("drive", {
              user_name: req.params.id,
              doc_: doca
            });
          }

        });



      }



    }
  });

});


app.get("/drive/delete/:id", isLoggedIn, function (req, res) {



  drivemodel.deleteOne({
    doc_id: req.params.id,
    user_id: req.user.username
  }, function (err) {
    _document.deleteOne({
      _id: req.params.id
    }, function (err) {

      res.redirect("/drive/" + req.user.username);

    })

  })


});



app.get("/sheets/:id", isLoggedIn, function (req, res) {

  res.render("sheets");
});

app.get("/word/:id", isLoggedIn, function (req, res) {
 
  if (req.params.id == req.user.username) {
    
    res.render("word", {
      doc_text: {  name: "",
        created_by: req.params.id,
        date: Date.now ,
        document_name: "untitled",
       doc_type:"doc"},x:0
    });
  } else {//unsafe
    _document.find({
      _id: req.params.id
    }, function (err, docs) {
      res.render("word", {
        doc_text: docs[0],x:0
      });
    });

  }
});


app.post("/word/:id", isLoggedIn, function (req, res) {


  if (req.user.username == req.params.id) {

    var new__document = new _document({
      name: req.body.fname, //doc data
      created_by: req.user.username,
      document_name: req.body.save_fname,
    });
    new__document.save(function (err) {

      var new_drive = new drivemodel({
        doc_id: new__document._id,
        user_id: req.user.username,
        document_name: req.body.save_fname,
        // date:Date.now,
      });


      drivemodel.findOne({
        document_name: req.body.save_fname,
        user_id: req.user.username
      }, function (err, doc) { //doc exist

        if (_.isEmpty(doc)) {


          new_drive.save(function (err) {

            res.redirect("/drive/" + req.user.username); //saving successfull
          });

        } else {
          _document.deleteOne({
            _id: new_drive.doc_id
          }, function (err) {
            
           
                        res.render("word",{doc_text:{name: req.body.fname,
                        created_by: req.params.id,
                        date: Date.now ,
                        document_name: req.body.save_fname,
                       doc_type:"doc"},x:1});
            //  res.send("doc already exists"); //doc already exist
          });


        }
      });


    });

  } 
  // drivemodel.findOne({},function(err){

  // });
  

                              
                                  else {
                                    //updation with different name


                                    drivemodel.findOneAndUpdate({
                                      user_id: req.user.username,
                                      doc_id: req.params.id
                                    }, {
                                      document_name: req.body.save_fname
                                    }, {
                                      upsert: true,
                                       runValidators: true, context: 'query' 
                                    }, function (err, doc) {
                                                  if (err) {   res.render("word",{doc_text:{name: req.body.fname,
                                                   
                                                    document_name: req.body.save_fname,
                                                  doc_type:"doc"},x:1});}
                                      else { // res.redirect("/drive/"+req.user.username);
                                        _document.findOneAndUpdate({
                                          _id: req.params.id
                                        }, {
                                          name: req.body.fname,
                                          document_name: req.body.save_fname
                                        }, {
                                          upsert: true
                                        }, function (err, doc) {
                                          res.redirect("/drive/" + req.user.username);
                                        });
                                      }

                                    });

                                  }



});




// Auth Routes

app.get("/signup", function (req, res) {
  res.render("signup");
});

//handling user sign up
app.post("/signup", function (req, res) {

  User.register(new User({
      username: req.body.username
    }), req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.render("signup");
      } //user stragety

      passport.authenticate("local")(req, res, function () {

        var new__document = new _document({
          name: "dummy data", //doc data
          created_by: req.body.username,
          document_name: "dummy name",
        });
        new__document.save(function (err) {

          var new_drive = new drivemodel({
            doc_id: new__document._id,
            user_id: req.body.username,
            document_name: new__document.document_name,
            // date:Date.now,
          });

          new_drive.save(function (err) {
            res.redirect("/login");
          });

        });





      }); //user sign up done











    } //fun below user.reg




  ); //user reg
}); //app post

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