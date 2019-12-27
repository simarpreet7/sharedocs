
var express=require("express")
 var app= express()
 path = require('path'),
 app.use('/public', express.static('public'));
 
 
  app.get('/', function(req, res) {
      res.render('index.ejs');
  });
 






 app.listen(3000)

