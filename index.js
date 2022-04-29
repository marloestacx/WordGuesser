const express = require("express");
const { connect } = require("http2");
const app = express();
const http = require("http").createServer(app);
const path = require("path");
const io = require("socket.io")(http);
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static(path.resolve("public")));

// const url =
//   "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=dog";
const url = "https://api.urbandictionary.com/v0/random";

let users = [];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    "X-RapidAPI-Key": "2e4e1a6836msh0ce89341146813fp17794cjsne2205c57c485",
  },
};

let correctAnswer = [];
let usersBySocketId = [];
// home page
app.get("/", (req, res) => {
  res.render("home", {});
});

io.on("connection", (socket) => {
  //create room
  socket.on("create", function (room) {
    socket.join(room);
  });

  console.log("a user connected");

  socket.on("newDefinition", () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        // get random definition
        let answer = data.list[Math.floor(Math.random() * data.list.length)];
        correctAnswer.push(answer);
        io.emit("newDefinition", answer);
      })
      .catch((err) => console.error("error:" + err));
  });

  socket.on("message", (message) => {
    // console.log(message);
    // if word doesn't exist send message
    if (correctAnswer.length == 0) {
      io.emit("message", message);
    } else {
      console.log(message.message);
      // if word is guessed correct
      let answer = message.message.toLowerCase();
      if (answer == correctAnswer[0].word.toLowerCase()) {
        io.emit("correct", message);

        // delete item from array
        correctAnswer.pop();
      } else {
        io.emit("message", message);
      }
    }
  });
  console.log(usersBySocketId);
  socket.on("register username", (username) => {
    usersBySocketId[socket.id] = username;
    io.emit("users", { users: Object.values(usersBySocketId) });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");

    console.log(socket.id);
    usersBySocketId.filter(function (e) {
      return e !== socket.id;
    });

    usersBySocketId.splice(socket.id, 1);

    console.log(usersBySocketId);
  });
});

http.listen(port, () => {
  console.log("listening on port ", port);
});
