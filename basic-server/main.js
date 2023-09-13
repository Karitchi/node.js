const http = require("node:http");

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on("request", (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World");
});

server.listen(8000, "127.0.0.1", () => {
  console.log(`Server running at http://127.0.0.1:8000/`);
});