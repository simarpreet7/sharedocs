var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var shareschema = new Schema({
  name: String,
  created_by: String,
  date: { type: Date, default: Date.now },
  mdate: { type: Date, default: Date.now },
  document_name: String,
  doc_type:{type:String,default:"docs"},

});
/*
o : owner
r :  read
w : write
s : share and write
*/

module.exports= mongoose.model("_document", shareschema);