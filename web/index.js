const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = fs.promises;

const PORT = process.env.PORT || 4000;
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(PORT, () => {
  console.log("server runnning...");
});
