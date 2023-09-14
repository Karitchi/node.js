const http = require("node:http");
const fs = require("node:fs");

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on("request", (request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  fs.readFile(__dirname + "/public/index.html", (error, data) => {
    if (error) throw error;
    response.end(data);
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log(`Server running at http://127.0.0.1:8000/`);
});
// todo: find the official way of sending an html file
