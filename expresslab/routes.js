var express = require("express");
var routes = express.Router();

routes.get("/tasks", function(req, res){
    res.send("HEY IT'S WORKING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});

routes.post("/tasks", function(req, res){
    res.send("post");
});

routes.put("/tasks", function(req, res){
    res.send("put");
});

routes.delete("/tasks", function(req, res){
    res.send("delete");
});
module.exports = routes;
