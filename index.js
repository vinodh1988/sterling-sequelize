var express=require("express");
var app=express();
var parser=require('body-parser');
var cities=require("./routes/mongoroutes");
var uroutes=require("./routes/userroutes");
var mroutes=require("./routes/mysqlroutes");
var passport = require('passport');


app.use(parser.json());

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodebatch');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("mongo db connection is open");
});

app.use(passport.initialize());

app.use("/cities",cities);
app.use("/users",uroutes);
app.use("/seq",mroutes);

app.listen(4500,function(){
    console.log("App is running in port number 4500");

});