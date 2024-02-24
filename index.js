// **********Type of Module*************
// 1)Build module => core module
// 2)custom module local
// 3)3rd party module (npm)

const httpServer = require("http");
const fs = require("fs");
const { json } = require("stream/consumers");
const file = fs.readFileSync("index.html");

const users = [
  { name: "Joshua", age: 33 },
  { name: "Elsie", age: 33 },
  { name: "Joe", age: 33 },
  { name: "Nathan", age: 33 },
  { name: "Hilda", age: 33 },
  { name: "Blanche", age: 33 },
  { name: "Winnie", age: 33 },
  { name: "Isabella", age: 33 },
  { name: "Susie", age: 33 },
];
const server = httpServer.createServer(function (req, res) {
  if (req.url == "/" && req.method == "GET") {
    // res.setHeader("Content-Type", "text/html");
    // res.end("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'>");
    res.end(JSON.stringify(users));
    // JSON.strigify=> change all things in string
  }
  if (req.url == "/about" && req.method == "GET") {
    console.log(file);
    res.end(file);
  } else if (req.url == "/adduser" && req.method == "POST") {
    req.on("data", function (chunk) {
      users.push(JSON.parse(chunk));
      console.log(JSON.parse(chunk));
      res.end(chunk);
    });
  } else {
    res.end("404");
  }
});

server.listen(4000, function () {
  console.log("server is running .............");
});
