// server.js
const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>");
   response.write("<h2>This is Travis Brase -m63r576</h2><br><p>running on port 3030</p>"); 
   response.end();
}).listen(3030);