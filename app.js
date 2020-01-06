var express=require("express")
var app= express()
path = require('path'),
app.set("view engine", "ejs")
var bodyParser = require("body-parser"); 
var mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/share",{useNewUrlParser:true})

app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/public', express.static('public'));



const Schema=mongoose.Schema;

const shareschema=new Schema({name:String});

const share=mongoose.model("share",shareschema)



 
  app.get('/', function(req, res) {
    res.render('index.ejs');

});


  app.post('/example', (req, res) => {
    res.send(req.body.fname);
    
  var document1 = new share({name:req.body.fname})
  document1.save();


  });

 app.listen(3000)



