
//Firstly, we need to create an user model for app.js and plugin the mongoDB with Passport.js.
var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);