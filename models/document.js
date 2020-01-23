var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var shareschema = new Schema({
  name: String,
  created_by: String,
  permission:{ type: String, default: "o" },
  date: { type: Date, default: Date.now },

});
/*
o : owner
r :  read
w : write
s : share and write
*/

module.exports= mongoose.model("document", shareschema);