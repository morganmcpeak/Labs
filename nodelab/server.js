var http = require("http");
var tasks = require ("./tasks.js")
var taskArray = ["Whittle soap key", "Dig tunnel with spoon", "Built raft of raincoats", "Distract guards", "Create paper mache look alike"];

taskArray.forEach(function(taskArray) {
    console.log(taskArray);
    });


http.createServer(onRequest).listen(3000);

function onRequest(request, response) {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write(taskArray[3]);
    console.log(taskArray);
    response.end();
}