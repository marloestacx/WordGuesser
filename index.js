const express = require("express");
const { connect } = require("http2");
const app = express();
const http = require("http").createServer(app);
const path = require("path");
const io = require("socket.io")(http);
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const port = process.env.PORT || 3000;
var connectCounter = 0;

app.set("view engine", "ejs");

app.use(express.static(path.resolve("public")));
// app.get("/", (req, res) => {
//   res.render("chat", { data: connectCounter });
// });

const url =
  "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=dog";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    "X-RapidAPI-Key": "2e4e1a6836msh0ce89341146813fp17794cjsne2205c57c485",
  },
};

// home page
app.get("/", (req, res) => {
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.list[2].definition);
      // console.log(data.);
      // console.log(sorted);

      res.render("home", { data: data.list[2].definition });
    })
    .catch((err) => res.send(err));
});

io.on("connection", (socket) => {
  console.log("a user connected");
  connectCounter++;

  socket.on("message", (message) => {
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit("userConnected", connectCounter);
    connectCounter--;
  });
});

http.listen(port, () => {
  console.log("listening on port ", port);
});
