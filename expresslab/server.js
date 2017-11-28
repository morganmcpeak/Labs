var express = require("express");
var app = express();
var tasks = require ("./tasks.js");
var routePage = require("./routes.js");

app.use(express.static(__dirname + "/public"));
app.use("/", routePage);



var server = app.listen(8080, function(){
    console.log("server is up and running");
});
