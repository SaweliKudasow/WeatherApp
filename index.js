const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
  const file = req.url === "/" ? "index.html" : req.url.slice(1);
  const filePath = path.join(__dirname, "frontend", file);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end("Not found");
    }
    res.end(data);
  });
}).listen(3004);