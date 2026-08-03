const http = require("http");
const fs = require("fs");
const express = require('express')
const app = express()

const server = http.createServer((req, res) => {
  console.log("create the server");
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  let path = "./src/views/";
  switch (req.url) {
    case "/": {
      path += "index.html";
      res.statusCode = 200;
      break;
    }
    case "/about": {
      path += "about.html";
      res.statusCode = 200;
      break;
    }
    case "/create": {
      path += "create.html";
      res.statusCode = 200;
      break;
    }
    case "/about-me": {
      res.setHeader("Location", "/about");
      res.statusCode = 301;
      res.end();
      break;
    }
    default: {
      path += "404.html";
      res.statusCode = 404;
      break;
    }
  }
  const readFile = fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(8000, "localhost", () => {
  console.log("server in on port 8000");
});
