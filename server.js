var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    if(req.session.count) {
        req.session.count ++;
    }
    else {
        req.session.count = 1;
    }
    res.render("index", {r: req.session.count})
})

app.get("/add", function(req, res) {
    req.session.count ++;
    res.redirect("/")
})

app.get("/reset", function(req, res) {
    req.session.count = 0;
    res.redirect("/")
})

app.listen(8000, function() {
    console.log("listening on port 8000");
  })