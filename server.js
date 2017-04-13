var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhose:27017/project1');

app.use('/app',express.static(__dirname + "/app"));
app.use('/node_modules',express.static(__dirname + "/node_modules"));

app.get('/',function(req,res){
    res.sendfile('index.html');
});

app.listen('3000', function(){
    console.log("this shuld work");
});