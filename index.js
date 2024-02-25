// // **********Type of Module*************
// // 1)Build module => core module
// // 2)custom module local
// // 3)3rd party module (npm)

// const httpServer = require("http");
// const fs = require("fs");
// const { json } = require("stream/consumers");
// const file = fs.readFileSync("index.html");

// const server = httpServer.createServer(function (req, res) {
//   if (req.url == "/" && req.method == "GET") {
//            res.write("hello")
//            res.end("Home")
//   }
//   // if (req.url == "/about" && req.method == "GET") {
//   //   // console.log(file);
//   //   // res.end(file);
//   // } else if (req.url == "/adduser" && req.method == "POST") {
//     // req.on("data", function (chunk) {
//     //   users.push(JSON.parse(chunk));
//     //   console.log(JSON.parse(chunk));
//     //   res.end(chunk);
//     // });
//   // } else {
//     res.end("404");
//   // }
// });

// server.listen(4000, function () {
//   console.log("server is running .............");
// });
// express => method
const express = require("express");
const app = express();

const users = [
  { name: "Joshua", age: 33, email: "levef@turne.cy" },
  { name: "Elsie", age: 33, email: "ow@cuhi.ag" },
  { name: "Joe", age: 33, email: "upoasa@uta.by" },
  { name: "Nathan", age: 33, email: "fojajtuh@fe.eh" },
  { name: "Hilda", age: 33, email: "kefa@dazive.jp" },
  { name: "Blanche", age: 33, email: "deitaef@kurejeno.kz" },
  { name: "Winnie", age: 33, email: "re@cahwet.ss" },
  { name: "Isabella", age: 33, email: "deoworu@zozwesji.ba" },
  { name: "Susie", age: 33, email: "jo@om.ye" },
];

app.get("/adduser", (req, res) => {
 
 res.send(users)
  // res.json({ "message":"success", users})
  // console.log(__dirname)
  // res.sendFile(__dirname + "/index.html")
});

app.post("/adduser", express.json(), (req, res) => {
  let isExist = users.find((ele) => ele.email == req.body.email)
   if(isExist) {
    res.send("email already exist")
   }else {
     users.push(req.body)
  res.send("user added")
}
  // console.log(req.body)
  
  // req.on("data", (chunk) => {
  //   console.log(chunk);
  // });
  // res.send("user added");
});
app.listen(4000, () => {
  console.log("server is running .............");
});
